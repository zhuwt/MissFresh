/**
 * Created by zhuwt on 2016/8/31.
 */
angular.module('thisApp.detail', [])
    .controller('thisApp.detailController', function () {
        var vm = this;
        var imageSourcePath = 'src/resource/image/detail/';
        vm.clickClassification = function (index) {
            for (var i=0;i<vm.goodInfo.length;i++)
                vm.goodInfo[i].active = false;

            vm.goodInfo[index].active = true;
        };
        
        vm.addGoodsCount = function (parentIndex,index) {
            if (vm.goodInfo[parentIndex].goods[index].bookingCount == vm.goodInfo[parentIndex].goods[index].limited)
                return ;

            vm.goodInfo[parentIndex].goods[index].bookingCount++;
        };

        vm.reduceGoodsCount = function (parentIndex,index) {
            if (vm.goodInfo[parentIndex].goods[index].bookingCount == 0)
                return ;

            vm.goodInfo[parentIndex].goods[index].bookingCount--;
        };

        vm.goodInfo = [
            {
                classification: '蔬菜',
                active: true,
                goods: [
                    {
                        src: imageSourcePath + 'vegetables.jpg',
                        goodName: '青菜',
                        goodDetail: '有机青菜100g',
                        sellCount: 21,
                        goodEvaluate: 97,
                        price: 3.5,
                        bookingCount: 0,
                        limited:10
                    }
                    , {
                        src: imageSourcePath + 'lettuce.jpg',
                        goodName: '莴笋',
                        goodDetail: '有机莴笋400g',
                        sellCount: 11,
                        goodEvaluate: 96,
                        price: 5.5,
                        bookingCount: 0,
                        limited:10
                    }
                ]
            }
            , {
                classification: '水果',
                active: false,
                goods: [
                    {
                        src: imageSourcePath + '134247703836.png',
                        goodName: '西瓜',
                        goodDetail: '新鲜西瓜200g',
                        sellCount: 55,
                        goodEvaluate: 99,
                        price: 1.5,
                        bookingCount: 0,
                        limited:10
                    }
                    , {
                        src: imageSourcePath + '134247703836.png',
                        goodName: '葡萄',
                        goodDetail: '户太8号1000g',
                        sellCount: 25,
                        goodEvaluate: 99,
                        price: 4.6,
                        bookingCount: 0,
                        limited:10
                    }
                ]
            }
            , {
                classification: '海产',
                active: false,
                goods: [
                    {
                        src: imageSourcePath + '134247703836.png',
                        goodName: '鲈鱼',
                        goodDetail: '鲜活鲈鱼1000g',
                        sellCount: 5,
                        goodEvaluate: 92,
                        price: 7.5,
                        bookingCount: 0,
                        limited:10
                    }
                    , {
                        src: imageSourcePath + '134247703836.png',
                        goodName: '草鱼',
                        goodDetail: '鲜活草鱼1000g',
                        sellCount: 7,
                        goodEvaluate: 94,
                        price: 3.5,
                        bookingCount: 0,
                        limited:10
                    }
                ]
            }
        ];
    });