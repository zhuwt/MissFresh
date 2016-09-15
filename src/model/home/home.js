/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', [])
    .controller('thisApp.homeController', function ($location) {
        var vm = this;
        vm.jumpToUrl = function (url) {
            $location.path(url);
        }
    });