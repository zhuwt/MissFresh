/**
 * Created by bzhu on 20161117.
 */
MissFreshModel.service('mealsService',function (localStorageService,$http) {
    this.getMealsList = function (callback) {
        $http.get(MFGlobal.baseUrl + 'meals'
        ).then(function (response) {//successCallback
            for (var n = 0; n < response.data.DTOObject.length; n++) {
                // response.data.DTOObject[n].imageName = MFGlobal.detailPath + response.data.DTOObject[n].imageName;
                var value = localStorageService.get(response.data.DTOObject[n].id.toString());
                if (value == null)
                    response.data.DTOObject[n].bookingCount = 0;
                else
                    response.data.DTOObject[n].bookingCount = parseInt(value);
                response.data.DTOObject[n].displayInCart = (response.data.DTOObject[n].bookingCount > 0)
            }
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.getEntireMeals = function (id,callback) {
        $http.get(MFGlobal.baseUrl + 'meals/' + id
        ).then(function (response) {//successCallback
            // var value = localStorageService.get(response.data.DTOObject[n].id.toString());
            // if (value == null)
            //     response.data.DTOObject.bookingCount = 0;
            // else
            //     response.data.DTOObject.bookingCount = parseInt(value);
            callback(response.data.DTOObject);
        }, function (response) {//errorCallback
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
            callback(response.data.DTOObject);
        });
    };

    this.create = function (meals, callback) {
        $http.post(MFGlobal.baseUrl + 'meals/', meals)
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