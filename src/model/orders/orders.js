/**
 * Created by zhuwt on 2016/9/13.
 */
angular.module('thisApp.orders', [])
    .controller('thisApp.ordersController', function ($rootScope,$location,localStorageService,orderService,mealsOrdersService) {
        var vm = this;
        vm.orders = {};
        vm.mealsOrder = {};
        vm.displayType = 0;

        $rootScope.mfGlobal_title = '订单列表';
        
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
                }
            });

        };
        vm.init();

        vm.displayMealsOrder = function(){
            vm.displayType = 1;
            var accId = localStorageService.get("AccountId");
            if (accId == null){
                return ;
            }

            mealsOrdersService.getMealsOrdersList(accId,function (data) {
                vm.mealsOrder = data[0];
                vm.mealsOrder.orderState = vm.getStatus(vm.mealsOrder.orderState.toString());
                for (var n=0;n<vm.mealsOrder.orderDetail.length;n++){
                    vm.mealsOrder.orderDetail[n].imageName = MFGlobal.detailPath + vm.mealsOrder.orderDetail[n].imageName;
                }
            });
        };

        vm.displayGoodsOrder = function(){
            vm.displayType = 0;
            orderService.getOrderList(accId,function (data) {
                console.log(data);
                vm.orders = data;
                for (var n=0;n<vm.orders.length;n++){
                    vm.orders[n].orderState = vm.getStatus(vm.orders[n].orderState.toString());
                }
            });
        };
        
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