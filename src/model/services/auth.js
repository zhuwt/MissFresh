/**
 * Created by zhuwt on 2016/10/26.
 */
angular.module('thisApp.auth', []).factory('authService', function ($http) {
    var basePath = 'http://localhost:8912';
    return {
        login: function (telNo, password, callback) {
            $http.get(basePath + "/Account?telNo=" + telNo + "&password=" + password)
                .then(function successCallback(response) {
                    console.log(response);
                    callback(response.data);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                    callback(false);
                });
        },
        register: function (code, phoneNo, password, callback) {
            $http.put(
                basePath + "/Account",
                {
                    code: code,
                    customer: {
                        telNo: phoneNo,
                        password: password
                    }
                }
            ).then(function successCallback(response) {
                callback(response.data);

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                window.alert(response.data);
            });
        },
        verification:function (phoneNo,callback) {
            $http.get("http://localhost:8912/Account/Check?telNo=" + phoneNo)
                .then(function successCallback(response) {
                    callback(response.data);
                    // console.log(response);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                    window.alert(response.data);
                });
        }
    }
});