/**
 * Created by zhuwt on 2016/9/13.
 */
angular.module('thisApp.orders', [])
    .controller('thisApp.ordersController', function ($locastion) {
        var vm = this;

        vm.jumpToOrder = function(){
            $locastion.url('/order');
        }
    });