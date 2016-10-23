/**
 * Created by zhuwt on 2016/9/12.
 */
angular.module('thisApp.login', [])
    .controller('thisApp.loginController', function ($location, $http) {
        var vm = this;
        vm.loginModel = true;
        vm.popupAlert = false;
        vm.popupAlertMsg = '';
        vm.telNo = '';
        vm.phoneNo = '';
        vm.password1 = '';

        //login function
        vm.login = function () {
            $http.get("http://localhost:8912/Account?telNo=" + vm.phoneNo + "&password=" + vm.password)
                .then(function successCallback(response) {
                    console.log(response);
                    if (response.data){
                        $location.path("#/menu");
                    }
                    else{
                        vm.popupAlert = true;
                    }
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                    vm.popupAlert = true;
                });

            // vm.popupAlert = (vm.phoneNo != '11111111111' || vm.password != 'admin');
            // if (vm.phoneNo == '11111111111' && vm.password == 'admin')
            //     $location.path("#/menu");
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

            $http.put(
                "http://localhost:8912/Account",
                {
                    code: vm.checkCode,
                    customer: {
                        telNo: vm.phoneNo,
                        password: vm.password
                    }
                }
            ).then(function successCallback(response) {
                $location.path("#/home");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
            });
        };
        //Send check Code
        vm.sendCode = function () {
            $http.get("http://localhost:8912/Account/Check?telNo=" + vm.phoneNo)
                .then(function successCallback(response) {
                    console.log(response);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                });
        };

        //Change login and register model
        vm.changeLoginMode = function (modelType) {
            vm.loginModel = modelType;
            vm.popupAlert = false;
        }
    });