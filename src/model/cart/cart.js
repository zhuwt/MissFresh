/**
 * Created by zhuwt on 2016/9/7.
 */
angular.module('thisApp.cart', ['ui.bootstrap', 'LocalStorageModule'])
    .controller('thisApp.cartController', function (localStorageService, $location, goodsService) {
        var vm = this;
        vm.total = 0;
        vm.count = 0;

        vm.initialGoods = function () {
            goodsService.getAllGoods(function (data) {
                vm.goods = data;
                vm.calculate();
            });
        };
        vm.initialGoods();

        vm.addGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == vm.goods[index].limited)
                return;

            vm.goods[index].bookingCount++;
            localStorageService.set(vm.goods[index].id.toString(), vm.goods[index].bookingCount.toString());
            vm.calculate();
        };

        vm.reduceGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == 0)
                return;

            vm.goods[index].bookingCount--;
            if (vm.goods[index].bookingCount == 0)
                localStorageService.remove(vm.goods[index].id.toString());
            else
                localStorageService.set(vm.goods[index].id.toString(), vm.goods[index].bookingCount.toString());
            vm.calculate();
        };

        vm.calculate = function () {
            vm.total = 0;
            vm.count = 0;
            for (var i = 0; i < vm.goods.length; i++) {
                vm.count += vm.goods[i].bookingCount;
                vm.total = FloatAdd(vm.total, vm.goods[i].bookingCount * vm.goods[i].price);
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
            m = Math.pow(10, Math.max(r1, r2));
            return ((arg1 * m + arg2 * m) / m);
        }

        vm.clearCart = function () {
            if (window.confirm('清空购物车并重新选购？')) {
                for (var i = 0; i < vm.goods.length; i++) {
                    vm.goods[i].bookingCount = 0;
                    vm.goods[i].displayInCart = false;
                }
                vm.total = 0;
                vm.count = 0;
                $location.path('/menu');
            }
            // window.confirm('确定清空购物车吗?');
            // vm.open = function (size) {
            //     var modalInstance = $uibModal.open({
            //         animation: true,
            //         ariaLabelledBy: "标题信息",
            //         ariaDescribedBy: "您确定清空购物车吗",
            //         templateUrl: 'myModalContent.html',
            //         controller: 'thisApp.cartModalControl',
            //         controllerAs: 'vm',
            //         size: size,
            //         resolve: {
            //             items: function () {
            //                 return vm;
            //             }
            //         }
            //     });
            //
            //     modalInstance.result.then(function (vm) {
            //         console.log(vm);
            //     }, function () {
            //         console.log('Click on other place!');
            //     });
            // };
            // vm.open();
        };

        vm.clearItem = function (index) {
            vm.goods[index].bookingCount = 0;
            vm.goods[index].displayInCart = false;
            localStorageService.remove(vm.goods[index].id.toString());
            vm.calculate();
        };

        vm.pay = function () {
            $location.path('/order/goods/1');
        };

        vm.back = function () {
            $location.path('/menu');
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
        //         unit: '1000g',
        //         bookingCount: 5,
        //         displayInCart: true,
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
        //         bookingCount: 2,
        //         displayInCart: true,
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
        //         bookingCount: 9,
        //         displayInCart: true,
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
        //         displayInCart: false,
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
        //         bookingCount: 4,
        //         displayInCart: true,
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
        //         displayInCart: false,
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
        //         displayInCart: false,
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
        //         displayInCart: true,
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

angular.module('thisApp.cart').controller('thisApp.cartModalControl', function ($uibModalInstance, items) {
    var vm = this;
    vm.dialogTitle = "标题信息";
    vm.content = '您确定清空购物车吗？';
    vm.ok = function () {
        console.log("Click on 'OK' button.");
        vm.result = 0;
        $uibModalInstance.close(vm);
    };

    vm.cancel = function () {
        console.log("Click on 'Cancel' button.");
        $uibModalInstance.dismiss('cancel');
    };
});