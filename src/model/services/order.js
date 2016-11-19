/**
 * Created by bzhu on 20161117.
 */
MissFreshModel.service('orderService', function ($http) {
    this.getOrderList = function (id, callback) {
        $http.get(MFGlobal.baseUrl + 'ordersList/' + id
        ).then(function (response) {//successCallback
            for (var n = 0; n < response.data.DTOObject.length; n++) {
                response.data.DTOObject[n].imangeName = MFGlobal.detailPath + response.data.DTOObject[n].imangeName;
            }
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.getOrder = function () {
        $http.get(MFGlobal.baseUrl + 'orders/' + orderId)
            .then(function (response) {//successCallback
                callback(response.data.DTOObject);
            }, function (response) {//errorCallback
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                callback(response.data.DTOObject);
            });
    };

    this.create = function (order, callback) {
        $http.post(MFGlobal.baseUrl + 'orders/', order)
            .then(function (response) {//successCallback
                if (callback) callback(response.data.DTOObject);
            }, function (response) {//errorCallback
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                callback(response.data.DTOObject);
            });
    };
});