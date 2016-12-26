/**
 * Created by zhuwt on 2016/9/13.
 */
angular.module('thisApp.account', [])
    .controller('thisApp.accountController', function ($rootScope,$location) {
        // console.log('controller initial finished!');
        var vm = this;
        vm.funcList = [
            '我的订单'
            ,'地址管理'
            ,'密码修改'
            ,'忘记密码'
            ,'注销登录'
        ];
        $rootScope.mfGlobal_title = '用户中心';
        
        vm.clickFunc = function (index) {
            switch (index){
                case 0:
                    $location.path('/orders');
                    break;
                case 1:
                    $location.path('/address');
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        }
    });