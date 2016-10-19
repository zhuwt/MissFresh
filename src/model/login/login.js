/**
 * Created by zhuwt on 2016/9/12.
 */
angular.module('thisApp.login', [])
    .controller('thisApp.loginController', function ($location,$http) {
        var vm = this;
        vm.loginModel = true;
        vm.popupAlert = false;
        vm.popupAlertMsg = '';
        //login function
        vm.login = function () {
            vm.popupAlert = (vm.phoneNo != '11111111111' || vm.password != 'admin');
            if (vm.phoneNo == '11111111111' && vm.password == 'admin')
                $location.path("#/menu");
        };
        //register function
        vm.register = function () {
            if (vm.phoneNo != '11111111111'){
                vm.popupAlert = true;
                vm.popupAlertMsg = '用户名已经被注册啦，请重新填写.';
                return ;
            }
            if (vm.email != 'admin@admin.com'){
                vm.popupAlert = true;
                vm.popupAlertMsg = '邮箱已经被使用啦，请重新填写.';
            }
        };
        //Send check Code
        vm.sendCode = function () {
            $http.get("http://localhost:8912/Account/Check?telNo=13572145285")
                .then(function successCallback(response) {
                    console.log(response);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
            });
        };

        //Change login and register model
        vm.changeLoginMode = function(modelType){
            vm.loginModel = modelType;
            vm.popupAlert = false;
        }
    });