/**
 * Created by zhuwt on 2016/9/10.
 */
angular.module('thisApp.order', [])
    .controller('thisApp.orderController', function () {
        var vm = this;
        //TODO: Why first invoke date control must failed each time?
        angular.element(endTime).date({theme:"datetime"});

        vm.popDate = function(){
            // console.log(angular.element(endTime));
            angular.element(endTime).date({theme:"datetime"});
        };

        vm.popAddress = function(){

        }
    });