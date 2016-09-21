/**
 * Created by zhuwt on 2016/9/21.
 */
angular.module('thisApp.password', [])
    .controller('thisApp.passwordController', function ($routeParams) {
        // $location,$anchorScroll
        var vm = this;

        vm.confirm = function () {
            $location.path('/account');
        };
    });