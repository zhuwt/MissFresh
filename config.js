/**
 * Created by Bucky.Zhu on 08/04/2016.
 */
routeApp.config(['$routeProvider',function ($routeProvider) {
    console.log('enter the route function!');
    $routeProvider
        .when('/login', {
            templateUrl: 'src/model/login/login.html'
        })
        .when('/home', {
            templateUrl: 'src/model/home/home.html'
        })
        .when('/menu/:id', {
            templateUrl: 'src/model/menu/menu.html'
        })
        .when('/detail', {
            templateUrl: 'src/model/detail/detail.html'
        })
        .when('/cart', {
            templateUrl: 'src/model/cart/cart.html'
        })
        .when('/orders', {
            templateUrl: 'src/model/orders/orders.html'
        })
        .when('/order', {
            templateUrl: 'src/model/order/order.html'
        })
        .when('/address', {
            templateUrl: 'src/model/address/address.html'
        })
        .when('/editAddress', {
            templateUrl: 'src/model/address/editAddress.html'
        })
        .when('/account', {
            templateUrl: 'src/model/account/account.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);