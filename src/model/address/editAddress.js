/**
 * Created by zhuwt on 2016/9/19.
 */
angular.module('thisApp.editAddress', [])
    .controller('thisApp.editAddressController', function ($location) {
        // $location,$anchorScroll
        var vm = this;

        vm.confirm = function () {
            $location.path('/address');
        };
    });