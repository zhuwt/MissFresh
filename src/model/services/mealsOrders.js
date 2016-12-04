/**
 * Created by zhuwt on 2016/12/3.
 */
MissFreshModel.service('mealsOrdersService', function ($http) {
    this.getMealsOrdersList = function (accId, callback) {
        $http.get(MFGlobal.baseUrl + 'mealsOrderList/' + accId
        ).then(function (response) {//successCallback
            console.log(response.data.DTOObject);
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.getEntireMealsOrders = function (Id, accId, callback) {
        $http.get(MFGlobal.baseUrl + 'mealsOrders/' + Id + '/' + accId
        ).then(function (response) {//successCallback
            console.log(response.data.DTOObject);
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };
});