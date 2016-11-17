/**
 * Created by zhuwt on 2016/9/19.
 */
angular.module('thisApp.address', ['LocalStorageModule'])
    .controller('thisApp.addressController', function ($location, $routeParams, addressService,localStorageService) {
        // $location,$anchorScroll
        var vm = this;
        vm.radioValue = 0;
        vm.setDefault = function (index) {
            for (var i = 0; i < vm.addresses.length; i++)
                vm.addresses[i].defaultAddress = false;

            vm.addresses[index].defaultAddress = true;
            vm.radioValue = index;
            vm.saveDefaultAddress(vm.addresses[index].name
                                    ,vm.addresses[index].tel
                                    ,vm.addresses[index].Address1);

            addressService.update(vm.addresses[index],function (data) {
                console.log(data);
            });
        };

        vm.newAddress = function () {
            $location.path('/editAddress');
        };

        vm.editAddress = function (index) {
            $location.path('/editAddress');
        };

        vm.deleteAddress = function (index) {
            if (window.confirm('确认删除该地址？')) {
                addressService.delete(vm.addresses[index].id, function (data) {
                    vm.addresses.splice(index, 1);
                    if (vm.addresses.length > 0) {
                        vm.addresses[0].defaultAddress = true;
                        vm.radioValue = 0;
                    }
                });
            }
        };

        vm.getAddresses = function () {
            addressService.getAddressList(function (data) {
                console.log(data);
                vm.addresses = data;
                for (var i = 0; i < vm.addresses.length; i++) {
                    if (vm.addresses[i].defaultAddress) {
                        vm.radioValue = i;
                    }
                }
            });
        };
        vm.getAddresses();

        vm.saveDefaultAddress = function (name,tel,address) {
            localStorageService.set("receiver",name);
            localStorageService.set("receiverTelNo",tel);
            localStorageService.set("defaultAddress",address);
        };

        // vm.addresses = [
        //     {
        //         id:1,
        //         default:true,
        //         receivePerson:'奥特曼',
        //         tel:11111111111,
        //         address:'致远星'
        //     }
        //     ,{
        //         id:1,
        //         default:false,
        //         receivePerson:'蓝精灵',
        //         tel:22222222222,
        //         address:'童话世界'
        //     }
        //     ,{
        //         id:1,
        //         default:false,
        //         receivePerson:'奥特曼',
        //         tel:33333333333,
        //         address:'致远星'
        //     }
        // ];
    });