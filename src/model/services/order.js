/**
 * Created by bzhu on 20161117.
 */
MissFreshModel.service('orderService', function ($http) {
    this.getOrderList = function () {
        $http.get(MFGlobal.baseUrl + '/orders'
        ).then(function (response) {//successCallback
            // // var category = [];
            // for (var n = 0; n < response.data.DTOObject.length; n++) {
            //     response.data.DTOObject[n].imageName = MFGlobal.detailPath + response.data.DTOObject[n].imageName;
            //     var value = $localStorage.get(response.data.DTOObject[n].id.toString());
            //     if (value == null)
            //         response.data.DTOObject[n].bookingCount = 0;
            //     else
            //         response.data.DTOObject[n].bookingCount = parseInt(value);
            // }
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.getOrder = function () {
        $http.get(MFGlobal.baseUrl + '/orders/' + orderId)
            .then(function (response) {//successCallback
                // // var category = [];
                // for (var n = 0; n < response.data.DTOObject.length; n++) {
                //     response.data.DTOObject[n].imageName = MFGlobal.detailPath + response.data.DTOObject[n].imageName;
                //     var value = $localStorage.get(response.data.DTOObject[n].id.toString());
                //     if (value == null)
                //         response.data.DTOObject[n].bookingCount = 0;
                //     else
                //         response.data.DTOObject[n].bookingCount = parseInt(value);
                // }
                callback(response.data.DTOObject);
            }, function (response) {//errorCallback
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                callback(response.data.DTOObject);
            });
    };

    this.create = function (order, callback) {
        $http.post(MFGlobal.baseUrl + '/orders/', order)
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