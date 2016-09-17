/**
 * Created by zhuwt on 2016/9/7.
 */
angular.module('thisApp.cart', ['ui.bootstrap'])
    .controller('thisApp.cartController', function ($uibModal) {
        var vm = this;
        var imageSourcePath = 'src/resource/image/detail/';
        vm.total = 0;
        vm.count = 0;

        vm.addGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == vm.goods[index].limited)
                return ;

            vm.goods[index].bookingCount++;
            vm.calculate();
        };

        vm.reduceGoodsCount = function (index) {
            if (vm.goods[index].bookingCount == 0)
                return ;

            vm.goods[index].bookingCount--;
            vm.calculate();
        };

        vm.calculate = function () {
            vm.total = 0;
            vm.count = 0;
            for (var i=0;i<vm.goods.length;i++){
                vm.count += vm.goods[i].bookingCount;
                vm.total += vm.goods[i].bookingCount*vm.goods[i].price;
            }
        };

        vm.bill = function () {
            vm.open = function (size) {
                var modalInstance = $uibModal.open({
                    animation: vm.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'thisApp.cartModalControl',
                    controllerAs: 'vm',
                    size: size,
                    resolve: {
                        items: function () {
                            return vm.items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    vm.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
            vm.open();
        };

        vm.goods = [
            {
                anchor:'vegetable',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'tomato.jpg',
                goodName: '西红柿',
                goodDetail: '有机番茄1000g',
                sellCount: 22,
                goodEvaluate: 97,
                price: 3.5,
                bookingCount: 5,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'broccoli.jpg',
                goodName: '西兰花',
                goodDetail: '花椰菜300g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 2,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'egg.jpg',
                goodName: '鸡蛋',
                goodDetail: '长白山农家土鸡蛋500g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 9,
                limited:10
            }
            ,{
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'tomato.jpg',
                goodName: '西红柿',
                goodDetail: '有机番茄1000g',
                sellCount: 22,
                goodEvaluate: 97,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'broccoli.jpg',
                goodName: '西兰花',
                goodDetail: '花椰菜300g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'egg.jpg',
                goodName: '鸡蛋',
                goodDetail: '长白山农家土鸡蛋500g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            ,{
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'tomato.jpg',
                goodName: '西红柿',
                goodDetail: '有机番茄1000g',
                sellCount: 22,
                goodEvaluate: 97,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'broccoli.jpg',
                goodName: '西兰花',
                goodDetail: '花椰菜300g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'egg.jpg',
                goodName: '鸡蛋',
                goodDetail: '长白山农家土鸡蛋500g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            ,{
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'tomato.jpg',
                goodName: '西红柿',
                goodDetail: '有机番茄1000g',
                sellCount: 22,
                goodEvaluate: 97,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'broccoli.jpg',
                goodName: '西兰花',
                goodDetail: '花椰菜300g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'蔬菜',
                src: imageSourcePath + 'egg.jpg',
                goodName: '鸡蛋',
                goodDetail: '长白山农家土鸡蛋500g',
                sellCount: 11,
                goodEvaluate: 96,
                price: 5.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'fruit',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'cherry.jpg',
                goodName: '樱桃',
                goodDetail: '澳洲进口车厘子1000g',
                sellCount: 55,
                goodEvaluate: 99,
                price: 1.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'lemon.jpg',
                goodName: '柠檬',
                goodDetail: '进口青柠500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'mango.jpg',
                goodName: '芒果',
                goodDetail: '我们不是菲律宾芒果500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'cherry.jpg',
                goodName: '樱桃',
                goodDetail: '澳洲进口车厘子1000g',
                sellCount: 55,
                goodEvaluate: 99,
                price: 1.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'lemon.jpg',
                goodName: '柠檬',
                goodDetail: '进口青柠500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'mango.jpg',
                goodName: '芒果',
                goodDetail: '我们不是菲律宾芒果500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'cherry.jpg',
                goodName: '樱桃',
                goodDetail: '澳洲进口车厘子1000g',
                sellCount: 55,
                goodEvaluate: 99,
                price: 1.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'lemon.jpg',
                goodName: '柠檬',
                goodDetail: '进口青柠500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'水果',
                src: imageSourcePath + 'mango.jpg',
                goodName: '芒果',
                goodDetail: '我们不是菲律宾芒果500g',
                sellCount: 25,
                goodEvaluate: 99,
                price: 4.6,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'seafood',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'clams.jpg',
                goodName: '蛤蜊',
                goodDetail: '蛤蜊1000g',
                sellCount: 5,
                goodEvaluate: 92,
                price: 7.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'squid.jpg',
                goodName: '鱿鱼',
                goodDetail: '新鲜鱿鱼2000g',
                sellCount: 7,
                goodEvaluate: 94,
                price: 3.5,
                bookingCount: 0,
                limited:10
            },
            {
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'clams.jpg',
                goodName: '蛤蜊',
                goodDetail: '蛤蜊1000g',
                sellCount: 5,
                goodEvaluate: 92,
                price: 7.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'squid.jpg',
                goodName: '鱿鱼',
                goodDetail: '新鲜鱿鱼2000g',
                sellCount: 7,
                goodEvaluate: 94,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
            ,{
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'clams.jpg',
                goodName: '蛤蜊',
                goodDetail: '蛤蜊1000g',
                sellCount: 5,
                goodEvaluate: 92,
                price: 7.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'squid.jpg',
                goodName: '鱿鱼',
                goodDetail: '新鲜鱿鱼2000g',
                sellCount: 7,
                goodEvaluate: 94,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
            ,{
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'clams.jpg',
                goodName: '蛤蜊',
                goodDetail: '蛤蜊1000g',
                sellCount: 5,
                goodEvaluate: 92,
                price: 7.5,
                bookingCount: 0,
                limited:10
            }
            , {
                anchor:'',
                visible:false,
                classification:'海产',
                src: imageSourcePath + 'squid.jpg',
                goodName: '鱿鱼',
                goodDetail: '新鲜鱿鱼2000g',
                sellCount: 7,
                goodEvaluate: 94,
                price: 3.5,
                bookingCount: 0,
                limited:10
            }
        ];
        vm.calculate()
    });

angular.module('thisApp.cart').controller('thisApp.cartModalControl', function ($uibModalInstance, items) {
    var vm = this;
    vm.ok = function () {
        $uibModalInstance.close();
    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});