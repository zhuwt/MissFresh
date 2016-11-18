/**
 * Created by zhuwt on 2016/11/13.
 */
MissFreshModel.service('addressConfigService',function ($http,$location,localStorageService) {
    this.getZones = function (callback) {
        var accountId = localStorageService.get("AccountId");
        if (accountId == null){
            $location.path('#/login');
            return ;
        }

        $http.get(MFGlobal.baseUrl+ 'AddressConfigs/zones/'
        ).then(function successCallback(response) {
            callback(response.data.DTOObject);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.getBuildings = function (parentId,callback) {
        $http.get(MFGlobal.baseUrl+ 'AddressConfigs/buildings/'+parentId
        ).then(function successCallback(response) {
            callback(response.data.DTOObject);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.getFloors = function (parentId,callback) {
        $http.get(MFGlobal.baseUrl+ 'AddressConfigs/floors/'+parentId
        ).then(function successCallback(response) {
            callback(response.data.DTOObject);
        },function errorCallback(response) {
            window.alert(response);
        });
    };

    this.getNumbers = function (parentId,callback) {
        $http.get(MFGlobal.baseUrl+ 'AddressConfigs/number/'+parentId
        ).then(function successCallback(response) {
            callback(response.data.DTOObject);
        },function errorCallback(response) {
            window.alert(response);
        });
    };
});