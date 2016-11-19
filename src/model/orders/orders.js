/**
 * Created by zhuwt on 2016/9/13.
 */
angular.module('thisApp.orders', [])
    .controller('thisApp.ordersController', function ($location,localStorageService,orderService) {
        var vm = this;
        vm.orders = {};
        
        vm.init = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                return ;
            }

            orderService.getOrderList(accId,function (data) {
                console.log(data);
                vm.orders = data;
            });
        };
        vm.init();

        vm.jumpToOrder = function(){
            $location.url('/order');
        }
    });