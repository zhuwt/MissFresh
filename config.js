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
        .when('/meals', {
            templateUrl: 'src/model/meals/meals.html'
        })
        .when('/menu/:id', {
            templateUrl: 'src/model/menu/menu.html'
        })
        .when('/detail/:id', {
            templateUrl: 'src/model/detail/detail.html'
        })
        .when('/detail/meals/:id', {
            templateUrl: 'src/model/detail/detail.html'
        })
        .when('/cart', {
            templateUrl: 'src/model/cart/cart.html'
        })
        .when('/orders', {
            templateUrl: 'src/model/orders/orders.html'
        })
        .when('/order/newGoods/', {
            templateUrl: 'src/model/order/order.html'
        })
        .when('/order/newMeals/', {
            templateUrl: 'src/model/order/order.html'
        })
        .when('/order/goods/:id', {
            templateUrl: 'src/model/order/order.html'
        })
        .when('/order/meals/:id', {
            templateUrl: 'src/model/order/order.html'
        })
        .when('/address', {
            templateUrl: 'src/model/address/address.html'
        })
        .when('/address/:id', {
            templateUrl: 'src/model/address/address.html'
        })
        .when('/editAddress', {
            templateUrl: 'src/model/address/editAddress.html'
        })
        .when('/account', {
            templateUrl: 'src/model/account/account.html'
        })
        .when('/password', {
            templateUrl: 'src/model/password/password.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

routeApp.run(['$rootScope','$location',function ($rootScope,$location) {
    $rootScope.$on('$routeChangeStart', routeChangeStart);
    function routeChangeStart(evt,next,current){
        console.log('start change route.');
        console.log('$location is :', $location);

        //hide the nav in login page
        $rootScope.MFDisplayNav = $location.$$path.indexOf('/login')<0;
    }
}]);