/**
 * Created by zhuwt on 2016/10/26.
 */
angular.module('thisApp.goods', []).factory('goodsService', function ($http) {
    var basePath = 'http://localhost:8912';
    var imageSourcePath = 'src/resource/image/detail/';
    return {
        getAllGoods: function (callback) {
            $http.get(basePath + '/goods'
            ).then(function successCallback(response) {
                // var category = [];
                for (var n = 0; n < response.data.DTOObject.length; n++) {
                    response.data.DTOObject[n].imageName = imageSourcePath + response.data.DTOObject[n].imageName;
                }
                callback(response.data.DTOObject);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                callback(response.data.DTOObject);
            });
        }
    }
});