/**
 * Created by zhuwt on 2016/9/10.
 */
angular.module('thisApp.menu', ['ngLocalStorage'])
    .controller('thisApp.menuController', function ($routeParams, $localStorage, categoryService, goodsService) {
        // $location,$anchorScroll
        var vm = this;
        // var imageSourcePath = 'src/resource/image/detail/';
        vm.count = 0;
        vm.total = 0;

        vm.initial = function () {
            categoryService.getAllCategory(function (data) {
                vm.classification = data;
                console.log(vm.classification);

                goodsService.getAllGoods(function (data) {
                    vm.goods = data;

                    //Set default select category when enter the page
                    var classificationIndex = parseInt($routeParams.id);
                    var index = classificationIndex >= vm.classification.length ? 0 : classificationIndex;
                    vm.clickClassification(index);
                    vm.calculate();
                });
            });
        };
        vm.initial();

        vm.clickClassification = function (index) {
            for (var i = 0; i < vm.classification.length; i++)
                vm.classification[i].selected = false;

            vm.classification[index].selected = true;
            for (var j = 0; j < vm.goods.length; j++) {
                vm.goods[j].visible = (vm.classification[index].category1 == vm.goods[j].category);
            }
            // $location.hash(anchor);
            // $anchorScroll();
        };

        vm.addGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == vm.goods[index].limited)
                return;

            vm.goods[index].bookingCount++;
            $localStorage.put(vm.goods[index].id.toString(), vm.goods[index].bookingCount.toString());
            vm.calculate();
        };

        vm.reduceGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == 0)
                return;

            vm.goods[index].bookingCount--;
            if (vm.goods[index].bookingCount == 0)
                $localStorage.remove(vm.goods[index].id.toString());
            else
                $localStorage.put(vm.goods[index].id.toString(), vm.goods[index].bookingCount.toString());
            vm.calculate();
        };

        vm.calculate = function () {
            vm.total = 0;
            vm.count = 0;
            for (var i = 0; i < vm.goods.length; i++) {
                if (vm.goods[i].bookingCount == 0)
                    continue;

                vm.count += vm.goods[i].bookingCount;
                // var temp = (vm.goods[i].bookingCount * vm.goods[i].price);
                vm.total = FloatAdd(vm.total,(vm.goods[i].bookingCount * vm.goods[i].price));
                // vm.total += vm.goods[i].bookingCount * vm.goods[i].price;
            }
        };

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
            m = Math.pow(10, Math.max(r1, r2))
            return (arg1 * m + arg2 * m) / m
        }

        // vm.scrollTo = function (anchor) {
        //     $location.hash(anchor);
        //     $anchorScroll();
        // };

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
        //         unit: '1000g',
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
        //         unit: '300g',
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
        //         unit: '500g',
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
        //         unit: '1000g',
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
        //         unit: '300g',
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
        //         unit: '500g',
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
        //         unit: '1000g',
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
        //         unit: '300g',
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
        //         unit: '500g',
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
        //         unit: '1000g',
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
        //         unit: '300g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
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
        //         unit: '1000g',
        //         bookingCount: 0,
        //         limited: 10
        //     }
        // ];
    });