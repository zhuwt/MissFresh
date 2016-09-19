/**
 * Created by zhuwt on 2016/9/19.
 */
angular.module('thisApp.address', [])
    .controller('thisApp.addressController', function ($location) {
        // $location,$anchorScroll
        var vm = this;
        vm.radioValue = 0;
        vm.setDefault = function (index) {
            for (var i=0;i<vm.addresses.length;i++)
                vm.addresses[i].default = false;

            vm.addresses[index].default = true;
        };

        vm.newAddress = function () {
            $location.path('/editAddress');
        };

        vm.editAddress = function (index) {
            $location.path('/editAddress');
        };

        vm.deleteAddress = function (index) {
            if (window.confirm('确认删除该地址？')){
                vm.addresses.splice(index,1);
                if (vm.addresses.length > 0){
                    vm.addresses[0].default = true;
                    vm.radioValue = 0;
                }
            }
        };

        vm.addresses = [
            {
                id:1,
                default:true,
                receivePerson:'奥特曼',
                tel:11111111111,
                address:'致远星'
            }
            ,{
                id:1,
                default:false,
                receivePerson:'蓝精灵',
                tel:22222222222,
                address:'童话世界'
            }
            ,{
                id:1,
                default:false,
                receivePerson:'奥特曼',
                tel:33333333333,
                address:'致远星'
            }
        ];
    });