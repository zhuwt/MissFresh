/**
 * Created by zhuwt on 2016/8/31.
 */
angular.module('thisApp.detail', ['LocalStorageModule'])
    .controller('thisApp.detailController', function ($location,$routeParams,goodsService,mealsService,localStorageService) {
        var vm = this;
        // var imageSourcePath = 'src/resource/image/detail/';
        vm.goodsMode = ($location.$$path.indexOf("meals") < 0);
        vm.goods = {limited:0};
        vm.meals = {};

        vm.initialDetailInformation = function () {

            console.log($routeParams);
            if (vm.goodsMode){//single goods information
                goodsService.getEntireGoods($routeParams.id,function (data) {
                    vm.goods = data;
                    vm.goods.src = MFGlobal.detailPath + data.imageName;
                    vm.goods.name = data.name;
                    vm.goods.price = data.price;
                    vm.goods.detailInformation = data.goodsDetail.introduce;
                });
            }else{//meals information
                mealsService.getEntireMeals($routeParams.id,function (data) {
                    vm.meals = data;
                    vm.meals.src = MFGlobal.mealsPath + data.imageName;
                    vm.meals.name = data.name;
                    vm.meals.price = data.price;
                    vm.meals.goodsList = data.goodsList;
                });
                // vm.single = true;
                // vm.src = "src/resource/image/detail/tomato.jpg";
                // vm.name = "番茄";
                // vm.price = 25.00;
                // vm.detailInformation = "番茄起源中心是南美洲的安第斯山地带。在秘鲁、厄瓜多尔、玻利维亚等地，至今仍有大面积野生种的分布。番茄属分为有色番茄亚种和绿色番茄亚种。前者果实成熟时有多种颜色，后者果实成熟时为绿色。番茄属由普通栽培种番茄及与栽培种番茄有密切关系的几个种组成，大体上又分为普通番茄和秘鲁番茄两个复合体种群。普通番茄群中包括：普通番茄、细叶番茄、奇士曼尼番茄、小花番茄和奇美留斯凯番茄、多毛番茄；秘鲁番茄群中包括智利番茄和秘鲁番茄。现在栽培番茄的祖先是樱桃番茄。墨西哥较早驯化栽培，1523年，番茄由墨西哥传到西班牙、葡萄牙，1550年前后传到意大利，1575年相继传到英国和中欧各国，当时作为观赏植物。18世纪中叶始作食用栽培。1768年米勒首次作出植物学描述，进行分类和定名。17世纪传入菲律宾，后传到其他亚洲国家。中国栽栽培的番茄从欧洲或东南亚传入。清代汪灏在《广群芳谱》的果谱附录中有“番柿”：“一名六月柿，茎似蒿。高四五尺，叶似艾，花似榴，一枝结五实或三四实。.......草本也，来自西番，故名”。由于番茄果实有特殊味道，当时仅作观赏栽培。到20世纪初，城市郊区始有栽培食用。中国栽培番茄是从50年代初迅速发展，成为主要果菜之一。"
            }
        };
        vm.initialDetailInformation();
        
        vm.addGoodsCount = function () {
            if (!vm.goodsMode){//single goods information
                if (vm.goods.bookingCount == vm.goods.limited)
                    return;

                vm.goods.bookingCount++;
                localStorageService.set(vm.goods.id, vm.goods.bookingCount);
            }else{
                if (vm.goods.bookingCount == MFGlobal.limitedMealsMacCount)
                    return;

                vm.meals.bookingCount++;
                localStorageService.set(vm.meals.id, vm.meals.bookingCount);
            }
        };

        vm.reduceGoodsCount = function () {
            if (!vm.goodsMode){//single goods information
                if (vm.goods.bookingCount == 0)
                    return;

                vm.goods.bookingCount--;
                if (vm.goods.bookingCount == 0)
                    localStorageService.remove(vm.goods.id.toString());
                else
                    localStorageService.set(vm.goods.id.toString(), vm.goods.bookingCount.toString());
            }else{
                if (vm.meals.bookingCount == 0)
                    return;

                vm.meals.bookingCount--;
                if (vm.meals.bookingCount == 0)
                    localStorageService.remove(vm.meals.id.toString());
                else
                    localStorageService.set(vm.meals.id.toString(), vm.meals.bookingCount.toString());
            }
        };

        // vm.goodInfo = [
        //     {
        //         classification: '蔬菜',
        //         active: true,
        //         goods: [
        //             {
        //                 src: imageSourcePath + 'vegetables.jpg',
        //                 goodName: '青菜',
        //                 goodDetail: '有机青菜100g',
        //                 sellCount: 21,
        //                 goodEvaluate: 97,
        //                 price: 3.5,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //             , {
        //                 src: imageSourcePath + 'lettuce.jpg',
        //                 goodName: '莴笋',
        //                 goodDetail: '有机莴笋400g',
        //                 sellCount: 11,
        //                 goodEvaluate: 96,
        //                 price: 5.5,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //         ]
        //     }
        //     , {
        //         classification: '水果',
        //         active: false,
        //         goods: [
        //             {
        //                 src: imageSourcePath + '134247703836.png',
        //                 goodName: '西瓜',
        //                 goodDetail: '新鲜西瓜200g',
        //                 sellCount: 55,
        //                 goodEvaluate: 99,
        //                 price: 1.5,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //             , {
        //                 src: imageSourcePath + '134247703836.png',
        //                 goodName: '葡萄',
        //                 goodDetail: '户太8号1000g',
        //                 sellCount: 25,
        //                 goodEvaluate: 99,
        //                 price: 4.6,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //         ]
        //     }
        //     , {
        //         classification: '海产',
        //         active: false,
        //         goods: [
        //             {
        //                 src: imageSourcePath + '134247703836.png',
        //                 goodName: '鲈鱼',
        //                 goodDetail: '鲜活鲈鱼1000g',
        //                 sellCount: 5,
        //                 goodEvaluate: 92,
        //                 price: 7.5,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //             , {
        //                 src: imageSourcePath + '134247703836.png',
        //                 goodName: '草鱼',
        //                 goodDetail: '鲜活草鱼1000g',
        //                 sellCount: 7,
        //                 goodEvaluate: 94,
        //                 price: 3.5,
        //                 bookingCount: 0,
        //                 limited:10
        //             }
        //         ]
        //     }
        // ];
    });