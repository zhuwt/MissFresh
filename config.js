/**
 * Created by Bucky.Zhu on 08/04/2016.
 */
// angular.module('thisApp').
// config(['$routeProvider',
//     function config($routeProvider) {
//         $routeProvider.
//         when('/home', {
//             template: 'src/home/home.html',
//             controller:'homeController'
//         }).
//         // when('/phones/:phoneId', {
//         //     template: '<phone-detail></phone-detail>'
//         // }).
//         otherwise('/home');
//     }
// ]);

routeApp.config(['$routeProvider',function ($routeProvider) {
    console.log('enter the route function!');
    $routeProvider
        .when('/home', {
            templateUrl: 'src/model/home/home.html'
        })
        .when('/detail', {
            templateUrl: 'src/model/detail/detail.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);