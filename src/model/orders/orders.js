/**
 * Created by zhuwt on 2016/9/13.
 */
angular.module('thisApp.orders', [])
    .controller('thisApp.ordersController', function ($location,localStorageService,orderService,mealsOrdersService) {
        var vm = this;
        vm.orders = {};
        vm.mealsOrders = {};

        $rootScope.mfGlobal_title = '分类';
        
        vm.init = function () {
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                return ;
            }

            orderService.getOrderList(accId,function (data) {
                console.log(data);
                vm.orders = data;
                for (var n=0;n<vm.orders.length;n++){
                    vm.orders[n].orderState = vm.getStatus(vm.orders[n].orderState.toString());
                    // switch (vm.orders[n].orderState.toString()){
                    //     case '0':
                    //         vm.orders[n].orderState = '待支付';
                    //         break;
                    //     case '1':
                    //         vm.orders[n].orderState = '已支付';
                    //         break;
                    //     case '2':
                    //         vm.orders[n].orderState = '出货';
                    //         break;
                    //     case '3':
                    //         vm.orders[n].orderState = '派送中';
                    //         break;
                    //     case '4':
                    //         vm.orders[n].orderState = '已完成';
                    //         break;
                    //     case '5':
                    //         vm.orders[n].orderState = '已关闭';
                    //         break;
                    //     default:
                    //         break;
                    // }
                }
            });
            mealsOrdersService.getMealsOrdersList(accId,function (data) {
                vm.mealsOrders = data;
                for (var n=0;n<vm.mealsOrders.length;n++){
                    vm.mealsOrders[n].imangeName = MFGlobal.mealsPath + vm.mealsOrders[n].imangeName;
                    vm.mealsOrders[n].orderState = vm.getStatus(vm.mealsOrders[n].orderState.toString());
                    // switch (vm.mealsOrders[n].orderState.toString()){
                    //     case '0':
                    //         vm.mealsOrders[n].orderState = '待支付';
                    //         break;
                    //     case '1':
                    //         vm.mealsOrders[n].orderState = '已支付';
                    //         break;
                    //     case '2':
                    //         vm.mealsOrders[n].orderState = '出货';
                    //         break;
                    //     case '3':
                    //         vm.mealsOrders[n].orderState = '派送中';
                    //         break;
                    //     case '4':
                    //         vm.mealsOrders[n].orderState = '已完成';
                    //         break;
                    //     case '5':
                    //         vm.mealsOrders[n].orderState = '已关闭';
                    //         break;
                    //     default:
                    //         break;
                    // }
                }
            });
        };
        vm.init();
        
        vm.getStatus = function (status) {
            switch (status){
                case '0':
                    return '待支付';
                case '1':
                    return '已支付';
                case '2':
                    return '出货';
                case '3':
                    return '派送中';
                case '4':
                    return '已完成';
                case '5':
                    return '已关闭';
                default:
                    break;
            }
        };

        vm.jumpToOrder = function(){
            $location.url('/order');
        }
    });