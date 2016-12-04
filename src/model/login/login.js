/**
 * Created by zhuwt on 2016/9/12.
 */
angular.module('thisApp.login', [])
    .controller('thisApp.loginController', function ($location, $http,authService) {
        var vm = this;
        vm.loginModel = true;
        vm.popupAlert = false;
        vm.popupAlertMsg = '';
        vm.telNo = '';
        vm.phoneNo = '';
        vm.password1 = '';

        //login function
        vm.login = function () {
            authService.login(vm.phoneNo,vm.password,function (data) {
                if (data)
                    $location.path("#/home");
                else
                    vm.popupAlert = true;
            });
        };

        vm.change = function () {
            vm.popupAlert = false;
        };

        //register function
        vm.register = function () {
            if (vm.password != vm.password1) {
                window.alert('两次密码输入的不同,请重新输入.');
                vm.password = '';
                vm.password1 = '';
                return;
            }

            authService.register(vm.certCode,vm.phoneNo,vm.password,function (data) {
                console.log(data);
                if (data.status == 2){
                    window.alert(data.information);
                }else{
                    $location.path("#/home");
                }
            });
        };
        //Send check Code
        vm.sendCode = function () {
            if (vm.phoneNo == '' || vm.phoneNo.length != 11){
                window.alert('请输入一个合理的手机号码!');
                return ;
            }
            authService.verification(vm.phoneNo,function (data) {
                if (data.status == 0){
                    window.alert('验证码已经发送到您的手机，请填写验证码后注册账号。');
                }else if (data.status == 2){
                    window.alert(data.information);
                }
                else{
                    window.alert('联系短信服务器失败，请联系客服人员.');
                }
            });
        };

        //Change login and register model
        vm.changeLoginMode = function (modelType) {
            vm.loginModel = !vm.loginModel;
            vm.popupAlert = false;
        }
    });