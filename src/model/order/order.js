/**
 * Created by zhuwt on 2016/9/10.
 */
angular.module('thisApp.order', ['mobiscroll-datetime','LocalStorageModule'])
    .controller('thisApp.orderController', function ($routeParams,$location,goodsService,localStorageService,orderService,mealsService) {
        var vm = this;
        var step = 15;

        vm.total = 0;
        vm.count = 0;
        vm.createMode = true;
        vm.mealsMode = true;
        vm.defaultAddress = '';
        vm.meals = {};

        //todo:displayincart maybe discard
        vm.init = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                $location.path('/login');
                return ;
            }

            if ($location.$$path.indexOf("newMeals") >= 0) {    //load all meal and compare with local
                vm.createMode = true;
                vm.mealsMode = true;
                mealsService.getMealsList(function (data) {
                    for (var n=0;n<data.length;n++){
                        if (data[n].bookingCount > 0){
                            vm.meals = data[n];
                            break;
                        }
                    }
                    // vm.calculate();
                    vm.defaultAddress = localStorageService.get("defaultAddress");
                });
            } else if ($location.$$path.indexOf("newGoods") >= 0) { //load all good and compare with local
                vm.createMode = true;
                vm.mealsMode = false;
                goodsService.getAllGoods(function (data) {
                    vm.goods = data;
                    vm.calculate();
                    vm.defaultAddress = localStorageService.get("defaultAddress");
                });
            } else if ($location.$$path.indexOf("goods") >= 0) {
                vm.createMode = false;
                vm.mealsMode = true;
                orderService.getOrder($routeParams.id,function (data) {
                    var order = data;
                    vm.total = order.totalPrice;
                    vm.count = order.totalCount;
                    vm.goods = order.orderDetailList;
                });
            } else{
                vm.createMode = false;
                vm.mealsMode = false;
                mealsService.getEntireMeals($routeParams.id,function (data) {
                    vm.total =data
                });
            }
        };
        vm.init();

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
            var week = consStr.weekArray;
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
                var option = week[n] + tempDate.getFullYear().toString()+ consStr.year + tempDate.getMonth().toString() + consStr.month + tempDate.getDate().toString() + consStr.day;
                options.push(option);
            }
            return options;
        };

        vm.initialDatePickerSettings = function () {
            vm.mealsMode = ($location.$$path.indexOf('meals') >= 0);

            if (vm.mealsMode) {//meals
                console.log('meals');
                vm.weeks = vm.initialWeeklyDay();
                vm.sendText = consStr.sendDate;
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
                vm.sendText = consStr.sendTime;
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

        vm.addMealCount = function (index) {
            if (vm.meals.bookingCount == 2)
                return;

            vm.meals.bookingCount++;
            vm.calculate();
        };

        vm.reduceMealCount = function (index) {
            if (vm.meals.bookingCount == 0)
                return;

            vm.meals.bookingCount--;
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
            if (window.confirm(consStr.clearCart)) {
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

        vm.pay = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                $location.path('#/login');
                return ;
            }

            vm.defaultAddress = localStorageService.get("defaultAddress");
            if (vm.defaultAddress == null){
                window.alert(consStr.needSendAddress);
                return ;
            }

            var telNo = localStorageService.get("receiverTelNo");
            if (telNo == null){
                $location.path('#/login');
                return ;
            }

            var receiver = localStorageService.get("receiver");
            if (receiver == null){
                window.alert(consStr.needReceiver);
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
                ,orderDetailList:[]
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
                //TODO:需要清理local里面的缓存信息
                console.log(data);
                window.alert(MFStrReousrce.order.createComplete);
            });
        };

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