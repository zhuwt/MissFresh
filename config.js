/**
 * Created by Bucky.Zhu on 08/04/2016.
 */
routeApp.config(['$routeProvider',function ($routeProvider) {
    console.log('enter the route function!');
    $routeProvider
        .when('/home', {
            templateUrl: 'src/model/home/home.html'
        })
        .when('/menu', {
            templateUrl: 'src/model/menu/menu.html'
        })
        .when('/detail', {
            templateUrl: 'src/model/detail/detail.html'
        })
        .when('/cart', {
            templateUrl: 'src/model/cart/cart.html'
        })
        .when('/order', {
            templateUrl: 'src/model/order/order.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);