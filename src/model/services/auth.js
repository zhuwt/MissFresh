/**
 * Created by zhuwt on 2016/10/26.
 */
angular.module('thisApp.auth', ['ngLocalStorage']).factory('authService', function ($localStorage,$rootScope,$http) {
    return {
        login: function (telNo, password, callback) {
            $http.get(MFGlobal.baseUrl + "/Account?telNo=" + telNo + "&password=" + password)
                .then(function successCallback(response) {
                    if (response.data.status == 0)
                        $localStorage.put("AccountId",response.data.DTOObject);
                    else
                        response.data.DTOObject = false;
                    console.log(response);
                    // $localStorage.set
                    callback(response.data.DTOObject);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                    callback(false);
                });
        },
        register: function (code, phoneNo, password, callback) {
            $http.put(
                MFGlobal.baseUrl + "/Account",
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
            $http.get(MFGlobal.baseUrl + "/Account/Check?telNo=" + phoneNo)
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