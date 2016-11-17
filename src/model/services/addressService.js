/**
 * Created by zhuwt on 2016/11/13.
 */
MissFreshModel.service('addressService',function ($http,$location,localStorageService) {
    this.getAddressList = function (callback) {
        var accountId = localStorageService.get("AccountId");
        if (accountId == null){
            $location.path('#/login');
            return ;
        }

        $http.get(MFGlobal.baseUrl+ '/Addresses/'+accountId
        ).then(function successCallback(response) {
            callback(response.data.DTOObject);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.getDefaultAddresss = function (accountId,callback) {
        $http.get(MFGlobal.baseUrl+ '/Address/'+accountId
        ).then(function successCallback(response) {
            callback(response.data);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.create = function (address,callback) {
        $http.post(MFGlobal.baseUrl+ '/Address/',
            address
        ).then(function successCallback(response) {
            callback(response.data);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.update = function (address,callback) {
        $http.put(MFGlobal.baseUrl+ '/Address/',
            address
        ).then(function successCallback(response) {
            callback(response.data);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.delete = function (accId,callback) {
        $http.delete(MFGlobal.baseUrl+ '/Address/?id='+ accId
        ).then(function successCallback(response) {
            callback(response.data);
        },function errorCallback(response) {
            window.alert(response);
        });
    };
});