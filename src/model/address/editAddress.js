/**
 * Created by zhuwt on 2016/9/19.
 */
angular.module('thisApp.editAddress', ['LocalStorageModule'])
    .controller('thisApp.editAddressController', function ($location,localStorageService,addressConfigService,addressService) {
        // $location,$anchorScroll
        var vm = this;
        vm.cityZoneId = 0;
        vm.zoneId = null;
        vm.buildingId = 0;
        vm.floorId = 0;
        vm.numberId = 0;
        vm.name = '';
        vm.telno = '';

        vm.confirm = function () {
            if (vm.cityZoneId.length == 0 || vm.zoneId.length == 0 || vm.buildingId.length == 0 ||
                vm.floorId.length == 0 || vm.numberId.length == 0){
                window.alert('请填写完整地址信息');
                return ;
            }

            if (vm.telno.length != 11){
                window.alert('请填写合适的手机密码.');
                return ;
            }

            var accId = localStorageService.get("AccountId");
            if (accId == null){
                $location.path('#/login');
                return ;
            }

            var cityZone = vm.getContent(vm.cityZones,vm.cityZoneId);
            var zone = vm.getContent(vm.zones,vm.zoneId);
            var building = vm.getContent(vm.buildings,vm.buildingId);
            var floor = vm.getContent(vm.floors,vm.floorId);
            var number = vm.getContent(vm.number,vm.numberId);
            if (zone == '' || building == '' || floor == '' || number == ''){
                window.alert('请填写完整地址信息');
                return ;
            }

            addressService.create({accountId:accId,
                Address1:cityZone+zone+building+floor+number
                ,tel:vm.telno
                ,name:vm.name
                ,defaultAddress:false},function (data) {
                if (data.status != 0){
                    window.alert(data.information);
                    return ;
                }
                $location.path('/address');
            });
        };

        vm.cityZone = function (){
            addressConfigService.getCityZones(function (data) {
                console.log(data);
                vm.cityZones = data;
                if (vm.cityZones.length > 0)
                    vm.zoneId = vm.cityZones[0].id;
            });
        };
        vm.cityZone();
        
        vm.getZone = function () {
            if (!vm.cityZoneId)
                return;

            addressConfigService.getZones(vm.cityZoneId, function (data) {
                console.log(data);
                vm.zones = data;
                if (vm.zones.length > 0)
                    vm.zoneId = vm.zones[0].id;
            });
        };
        
        vm.getBuildings = function () {
            if (!vm.zoneId)
                return;

            addressConfigService.getBuildings(vm.zoneId,function (data) {
                console.log(data);
                vm.buildings = data;
                if (vm.buildings.length > 0)
                    vm.buildingId = vm.buildings[0].id;
            });
        };

        vm.getFloors = function () {
            if (!vm.buildingId)
                return;

            addressConfigService.getFloors(vm.buildingId,function (data) {
                console.log(data);
                vm.floors = data;
                if (vm.floors.length > 0)
                    vm.floorId = vm.floors[0].id;
            });
        };

        vm.getNumbers = function () {
            if (!vm.floorId)
                return;

            addressConfigService.getNumbers(vm.floorId,function (data) {
                console.log(data);
                vm.number = data;
                if (vm.number.length > 0)
                    vm.numberId = vm.number[0].id;
            });
        };
        
        vm.getContent = function (data,id) {
            for (var n=0;n<data.length;n++){
                if (data[n].id == id)
                    return data[n].Content;
            }
            return null;
        }
    });