/**
 * Created by zhuwt on 2016/10/26.
 */
angular.module('thisApp.category', []).factory('categoryService', function ($http) {
    return {
        getAllCategory: function (callback) {
            $http.get(MFGlobal.baseUrl + '/category'
            ).then(function successCallback(response) {
                var category = [];
                for (var n = 0; n < response.data.length; n++) {
                    response.data[n].imageName = MFGlobal.category + response.data[n].imageName;
                    response.data[n].url = "/menu/" + n;//response.data[n].id;
                    response.data[n].selected = false;
                    category.push(response.data[n]);
                }
                callback(category);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                callback([]);
            });
        }
    }
});