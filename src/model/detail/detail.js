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
                    vm.meals.src = MFGlobal.mealsPath + data.imangeName;
                    vm.meals.name = data.name;
                    vm.meals.price = data.totalPrice;
                    vm.meals.goodsList = data.goodsList;
                });
            }
        };
        vm.initialDetailInformation();

        vm.payMeals = function () {
            localStorageService.set(vm.meals.id, 1);

            $location.path('/order/newMeals/');
        };

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
    });