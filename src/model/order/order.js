/**
 * Created by zhuwt on 2016/9/10.
 */
angular.module('thisApp.order', ['mobiscroll-datetime','LocalStorageModule'])
    .controller('thisApp.orderController', function ($routeParams,$location,goodsService,localStorageService,orderService,mealsService) {
        var vm = this;
        // var imageSourcePath = 'src/resource/image/detail/';
        vm.total = 0;
        vm.count = 0;
        var step = 15;
        vm.mealsMode = true;
        vm.defaultAddress = '';

        vm.getMinDate = function () {
            var minDate = new Date();
            var minute = 0;
            var multiple = parseInt(minDate.getMinutes() / step);
            if (multiple < 3) {
                minute = multiple * step;
            } else {
                minute = 0;
                minDate.setHours(minDate.getHours() + 1);
            }

            //set time offset
            minDate.setMinutes(minute);
            minDate.setHours(minDate.getHours() + 1);

            return minDate;
        };

        vm.initialWeeklyDay = function () {
            var options = [];
            var week = ['星期日（','星期一（','星期二（','星期三（','星期四（','星期五（','星期六（','星期日（'];
            var offset =0;
            var daysOfOneWeek = 7;
            var today = new Date();
            var todayOfWeekDay = today.getDay();
            for (var n=0;n<7;n++){
                var tempDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),0,0,0);
                if (n <= todayOfWeekDay){
                    offset = (todayOfWeekDay-n);
                    tempDate.setDate(tempDate.getDate()+daysOfOneWeek-offset);
                }else{
                    offset = (n - todayOfWeekDay);
                    tempDate.setDate(tempDate.getDate()+offset);
                }
                var option = week[n] + tempDate.getFullYear().toString()+ '年' + tempDate.getMonth().toString() + '月' + tempDate.getDate().toString() + '日起）';
                options.push(option);
            }
            return options;
        };

        vm.initialDatePickerSettings = function () {
            vm.mealsMode = ($location.$$path.indexOf('meals') >= 0);

            if (vm.mealsMode) {//meals
                console.log('meals');
                vm.weeks = vm.initialWeeklyDay();
                vm.sendText = "送餐日期：";
                vm.settings = {
                    theme: 'mobiscroll',
                    lang: 'zh',
                    display: 'bottom',
                    invalid: [{start: '00:00', end: '08:00'}, // Every day
                        {start: '22:00', end: '23:59'}],
                    steps: {
                        minute: 15,
                        zeroBased: false
                    },
                    timeFormat: 'HH:ii',
                    timeWheels: 'HHii'
                };
            } else {
                console.log('goods');
                vm.sendText = "送餐时间：";
                var minDate = new vm.getMinDate();
                var maxDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + 1, minDate.getHours(), minDate.getMinutes(), 0);
                vm.settings = {
                    theme: 'mobiscroll', // Specify theme like: theme: 'ios' or omit setting to use default
                    lang: 'zh', // Specify language like: lang: 'pl' or omit setting to use default
                    display: 'bottom', // Specify display mode like: display: 'bottom' or omit setting to use default
                    min: minDate, // More info about min: https://docs.mobiscroll.com/3-0-0_beta5/angular/datetime#!opt-min
                    max: maxDate,
                    invalid: [{start: '00:00', end: '08:00'}, // Every day
                        {start: '22:00', end: '23:59'}],
                    steps: {
                        minute: step,
                        zeroBased: false
                    },
                    dateWheels: '|mm月dd日|',
                    timeWheels: 'HHii' // More info about timeWheels: https://docs.mobiscroll.com/3-0-0_beta5/angular/datetime#!localization-timeWheels
                };
            }
        };

        vm.popAddress = function () {
            $location.path('/address');
        };

        vm.addGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == vm.goods[index].limited)
                return;

            vm.goods[index].bookingCount++;
            vm.calculate();
        };

        vm.reduceGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == 0)
                return;

            vm.goods[index].bookingCount--;
            vm.calculate();
        };

        vm.calculate = function () {
            vm.total = 0;
            vm.count = 0;
            if ($location.$$path.indexOf("meals") >= 0){//meals mode
                vm.total = vm.meals.totalPrice;
                vm.count = 1;
            }else{//goods mode
                for (var i = 0; i < vm.goods.length; i++) {
                    vm.count += vm.goods[i].bookingCount;
                    // vm.total += vm.goods[i].bookingCount * vm.goods[i].price;
                    vm.total = FloatAdd(vm.total, vm.goods[i].bookingCount * vm.goods[i].price)
                }
            }
        };

        vm.clearCart = function () {
            if (window.confirm('确定清空购物车,重新选购商品?')) {
                for (var i = 0; i < vm.goods.length; i++) {
                    vm.goods[i].bookingCount = 0;
                }
                vm.total = 0;
                vm.count = 0;
            }
            $location.path('/menu');
        };

        vm.backToMenu = function () {
            $location.path('/menu');
        };

        vm.init = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                $location.path('#/login');
                return ;
            }

            if ($location.$$path.indexOf("meals") >= 0){//meals mode
                mealsService.getEntireMeals($routeParams.id,function (data) {
                    vm.meals = data;
                    vm.calculate();
                    vm.defaultAddress = localStorageService.get("defaultAddress");
                });
            }else{//goods mode
                goodsService.getAllGoods(function (data) {
                    vm.goods = data;
                    vm.calculate();
                    vm.defaultAddress = localStorageService.get("defaultAddress");
                });
            }
        };
        vm.init();

        vm.pay = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                $location.path('#/login');
                return ;
            }

            vm.defaultAddress = localStorageService.get("defaultAddress");
            if (vm.defaultAddress == null){
                window.alert('请指定一个送货地址.');
                return ;
            }

            var telNo = localStorageService.get("receiverTelNo");
            if (telNo == null){
                $location.path('#/login');
                return ;
            }

            var receiver = localStorageService.get("receiver");
            if (receiver == null){
                window.alert('请填写一个收货人.');
                return ;
            }

            var order = {
                orderType:0
                ,orderState:0
                ,totalPrice:vm.total
                ,totalCount:vm.count
                ,accountId:accId
                ,receiveAddress:vm.defaultAddress
                ,tel:telNo
                ,receivePerson:receiver
                ,orderDetailList:[
                    // {
                    //     "id":"e82ca47d-b667-4f19-b9b3-21d7801ea4d5"
                    //     ,"goodsId":"C1CE870E-285C-4F97-A103-19BFAD39ABF5"
                    //     ,"count":"1"
                    //     ,"price":"10"
                    //     ,"evaluate":"100"
                    // },{
                    //     "id":"d5fe3a2c-95a7-4c15-9d65-a4259a259e4e"
                    //     ,"goodsId":"1EF6BED4-5D2C-4608-BC2C-98CE566D295D"
                    //     ,"count":"1"
                    //     ,"price":"3.5"
                    //     ,"evaluate":"100"
                    // }
                ]
            };
            for (var n=0;n<vm.goods.length;n++){
                if (vm.goods[n].bookingCount > 0){
                    var goodObj = {
                        goodsId:vm.goods[n].id
                        ,count:vm.goods[n].count
                        ,price:vm.goods[n].price
                        ,evaluate:vm.goods[n].evaluate
                    };
                    order.orderDetailList.push(goodObj);
                }
            }

            orderService.create(order,function (data) {
                console.log(data);
            });
        };
        // vm.goods = [
        //     {
        //         anchor: 'vegetable',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'tomato.jpg',
        //         goodName: '西红柿',
        //         goodDetail: '有机番茄1000g',
        //         sellCount: 22,
        //         goodEvaluate: 97,
        //         price: 3.5,
        //         bookingCount: 5,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'broccoli.jpg',
        //         goodName: '西兰花',
        //         goodDetail: '花椰菜300g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 2,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'egg.jpg',
        //         goodName: '鸡蛋',
        //         goodDetail: '长白山农家土鸡蛋500g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 9,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'tomato.jpg',
        //         goodName: '西红柿',
        //         goodDetail: '有机番茄1000g',
        //         sellCount: 22,
        //         goodEvaluate: 97,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'broccoli.jpg',
        //         goodName: '西兰花',
        //         goodDetail: '花椰菜300g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'egg.jpg',
        //         goodName: '鸡蛋',
        //         goodDetail: '长白山农家土鸡蛋500g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'tomato.jpg',
        //         goodName: '西红柿',
        //         goodDetail: '有机番茄1000g',
        //         sellCount: 22,
        //         goodEvaluate: 97,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'broccoli.jpg',
        //         goodName: '西兰花',
        //         goodDetail: '花椰菜300g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'egg.jpg',
        //         goodName: '鸡蛋',
        //         goodDetail: '长白山农家土鸡蛋500g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'tomato.jpg',
        //         goodName: '西红柿',
        //         goodDetail: '有机番茄1000g',
        //         sellCount: 22,
        //         goodEvaluate: 97,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'broccoli.jpg',
        //         goodName: '西兰花',
        //         goodDetail: '花椰菜300g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '蔬菜',
        //         src: imageSourcePath + 'egg.jpg',
        //         goodName: '鸡蛋',
        //         goodDetail: '长白山农家土鸡蛋500g',
        //         sellCount: 11,
        //         goodEvaluate: 96,
        //         price: 5.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: 'fruit',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'cherry.jpg',
        //         goodName: '樱桃',
        //         goodDetail: '澳洲进口车厘子1000g',
        //         sellCount: 55,
        //         goodEvaluate: 99,
        //         price: 1.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'lemon.jpg',
        //         goodName: '柠檬',
        //         goodDetail: '进口青柠500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'mango.jpg',
        //         goodName: '芒果',
        //         goodDetail: '我们不是菲律宾芒果500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'cherry.jpg',
        //         goodName: '樱桃',
        //         goodDetail: '澳洲进口车厘子1000g',
        //         sellCount: 55,
        //         goodEvaluate: 99,
        //         price: 1.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'lemon.jpg',
        //         goodName: '柠檬',
        //         goodDetail: '进口青柠500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'mango.jpg',
        //         goodName: '芒果',
        //         goodDetail: '我们不是菲律宾芒果500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'cherry.jpg',
        //         goodName: '樱桃',
        //         goodDetail: '澳洲进口车厘子1000g',
        //         sellCount: 55,
        //         goodEvaluate: 99,
        //         price: 1.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'lemon.jpg',
        //         goodName: '柠檬',
        //         goodDetail: '进口青柠500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '水果',
        //         src: imageSourcePath + 'mango.jpg',
        //         goodName: '芒果',
        //         goodDetail: '我们不是菲律宾芒果500g',
        //         sellCount: 25,
        //         goodEvaluate: 99,
        //         price: 4.6,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: 'seafood',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'clams.jpg',
        //         goodName: '蛤蜊',
        //         goodDetail: '蛤蜊1000g',
        //         sellCount: 5,
        //         goodEvaluate: 92,
        //         price: 7.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'squid.jpg',
        //         goodName: '鱿鱼',
        //         goodDetail: '新鲜鱿鱼2000g',
        //         sellCount: 7,
        //         goodEvaluate: 94,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     },
        //     {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'clams.jpg',
        //         goodName: '蛤蜊',
        //         goodDetail: '蛤蜊1000g',
        //         sellCount: 5,
        //         goodEvaluate: 92,
        //         price: 7.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'squid.jpg',
        //         goodName: '鱿鱼',
        //         goodDetail: '新鲜鱿鱼2000g',
        //         sellCount: 7,
        //         goodEvaluate: 94,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'clams.jpg',
        //         goodName: '蛤蜊',
        //         goodDetail: '蛤蜊1000g',
        //         sellCount: 5,
        //         goodEvaluate: 92,
        //         price: 7.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'squid.jpg',
        //         goodName: '鱿鱼',
        //         goodDetail: '新鲜鱿鱼2000g',
        //         sellCount: 7,
        //         goodEvaluate: 94,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'clams.jpg',
        //         goodName: '蛤蜊',
        //         goodDetail: '蛤蜊1000g',
        //         sellCount: 5,
        //         goodEvaluate: 92,
        //         price: 7.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        //     , {
        //         anchor: '',
        //         visible: false,
        //         classification: '海产',
        //         src: imageSourcePath + 'squid.jpg',
        //         goodName: '鱿鱼',
        //         goodDetail: '新鲜鱿鱼2000g',
        //         sellCount: 7,
        //         goodEvaluate: 94,
        //         price: 3.5,
        //         bookingCount: 0,
        //         limited: 10
        //     }
        // ];

        // vm.calculate();
        vm.initialDatePickerSettings();

        //加法函数，用来得到精确的加法结果
        //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
        //调用：FloatAdd(arg1,arg2)
        //返回值：arg1加上arg2的精确结果
        function FloatAdd(arg1, arg2) {
            var r1, r2, m;
            try {
                r1 = arg1.toString().split(".")[1].length
            } catch (e) {
                r1 = 0
            }
            try {
                r2 = arg2.toString().split(".")[1].length
            } catch (e) {
                r2 = 0
            }
            m = Math.pow(10, Math.max(r1, r2));
            return ((arg1 * m + arg2 * m) / m);
        }
    });