/**
 * Created by zhuwt on 2016/10/26.
 */
// angular.module('thisApp.goods', ['LocalStorageModule']).factory('goodsService', function (localStorageService,$rootScope,$http) {
MissFreshModel.service('goodsService',function (localStorageService,$rootScope,$http) {
    this.getAllGoods = function (callback) {
        $http.get(MFGlobal.baseUrl + 'goods'
        ).then(function successCallback(response) {
            for (var n = 0; n < response.data.DTOObject.length; n++) {
                response.data.DTOObject[n].imageName = MFGlobal.detailPath + response.data.DTOObject[n].imageName;
                var value = localStorageService.get(response.data.DTOObject[n].id.toString());
                if (value == null)
                    response.data.DTOObject[n].bookingCount = 0;
                else
                    response.data.DTOObject[n].bookingCount = parseInt(value);
                response.data.DTOObject[n].displayInCart = (response.data.DTOObject[n].bookingCount > 0)
            }
            callback(response.data.DTOObject);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.getEntireGoods = function (id,callback) {
        $http.get(MFGlobal.baseUrl + 'goods/' + id
        ).then(function successCallback(response) {
            // for (var n = 0; n < response.data.DTOObject.length; n++) {
            //     response.data.DTOObject[n].imageName = MFGlobal.detailPath + response.data.DTOObject[n].imageName;
            //     var value = localStorageService.get(response.data.DTOObject[n].id.toString());
            //     if (value == null)
            //         response.data.DTOObject[n].bookingCount = 0;
            //     else
            //         response.data.DTOObject[n].bookingCount = parseInt(value);
            //     response.data.DTOObject[n].displayInCart = (response.data.DTOObject[n].bookingCount > 0)
            // }
            var data = response.data.DTOObject;
            var value = localStorageService.get(data.id.toString());
            if (value == null)
                data.bookingCount = 0;
            else
                data.bookingCount = parseInt(value);
            callback(data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };
});