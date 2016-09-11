/**
 * Created by zhuwt on 2016/9/10.
 */
angular.module('thisApp.menu', [])
    .controller('thisApp.menuController', function () {
        var vm = this;
        var imageSourcePath = 'src/resource/image/detail/';
        vm.clickClassification = function (index) {
            for (var i=0;i<vm.goodInfo.length;i++)
                vm.goodInfo[i].selected = false;

            vm.goodInfo[index].selected = true;
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
                selected: true,
                goods: [
                    {
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
                        src: imageSourcePath + 'egg.jpg',
                        goodName: '鸡蛋',
                        goodDetail: '长白山农家土鸡蛋500g',
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
                selected: false,
                goods: [
                    {
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
                        src: imageSourcePath + 'mango.jpg',
                        goodName: '芒果',
                        goodDetail: '我们不是菲律宾芒果500g',
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
                selected: false,
                goods: [
                    {
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
                        src: imageSourcePath + 'squid.jpg',
                        goodName: '鱿鱼',
                        goodDetail: '新鲜鱿鱼2000g',
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