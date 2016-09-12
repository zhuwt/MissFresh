/**
 * Created by zhuwt on 2016/9/12.
 */
angular.module('thisApp.login', [])
    .controller('thisApp.loginController', function () {
        var vm = this;
        vm.loginModel = true;
        vm.changeLoginMode = function(){
            vm.loginModel = !vm.loginModel;
        }
    });