/**
 * Created by zhuwt on 2016/12/24.
 */
angular.module('thisApp.index', [])
    .controller('thisApp.indexController', function ($rootScope,$location) {
        var vm = this;

        $rootScope.mfGlobal_title = '小鲜来了';
        vm.expand = false;
        vm.funcList = [
            '登陆'
            ,'首页'
            ,'精选套餐'
            ,'购物车'
            ,'用户中心'
            ,'关于我们'
            ,'退出登陆'
        ];
        vm.linkList = [
            '/login'
            ,'/home'
            ,'/meals'
            ,'/cart'
            ,'/account'
            ,'/about'
            ,'/loginout'
        ];
        $rootScope.MFDisplayCart = false;

        vm.menu = function () {
            vm.expand = true;
        };

        vm.clickFunc = function (index) {
            vm.expand = false;
            $location.path(vm.linkList[index]);
        };

        vm.toCart = function () {
            vm.expand = false;
            $location.path("/cart");
        };
    });