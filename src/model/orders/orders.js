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
                for (var n=0;n<vm.orders.length;n++){
                    switch (vm.orders[n].orderState.toString()){
                        case '0':
                            vm.orders[n].orderState = '待支付';
                            break;
                        case '1':
                            vm.orders[n].orderState = '已支付';
                            break;
                        case '2':
                            vm.orders[n].orderState = '出货';
                            break;
                        case '3':
                            vm.orders[n].orderState = '派送中';
                            break;
                        case '4':
                            vm.orders[n].orderState = '已完成';
                            break;
                        case '5':
                            vm.orders[n].orderState = '已关闭';
                            break;
                        default:
                            break;
                    }
                }
            });
        };
        vm.init();

        vm.jumpToOrder = function(){
            $location.url('/order');
        }
    });