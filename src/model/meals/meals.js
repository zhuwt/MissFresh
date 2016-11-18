/**
 * Created by zhuwt on 2016/10/10.
 */
angular.module('thisApp.meals', [])
    .controller('thisApp.mealsController', function ($location,mealsService) {
        var vm = this;
        // vm.meals = [
        //     {
        //         href:"#/detail/meals/1",
        //         src:"src/resource/image/meals/mealsA.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/2",
        //         src:"src/resource/image/meals/mealsB.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/1",
        //         src:"src/resource/image/meals/mealsA.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/2",
        //         src:"src/resource/image/meals/mealsB.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/1",
        //         src:"src/resource/image/meals/mealsA.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/2",
        //         src:"src/resource/image/meals/mealsB.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/1",
        //         src:"src/resource/image/meals/mealsA.jpg"
        //     }
        //     ,{
        //         href:"#/detail/meals/2",
        //         src:"src/resource/image/meals/mealsB.jpg"
        //     }
        // ];


        vm.init = function () {
            mealsService.getMealsList(function (data) {
                for (var n=0;n<data.length;n++){
                    data[n].href = "#/detail/meals/" + data[n].id;
                    /**
                     * @param {{imangeName:string}} data
                     */
                    data[n].src = MFGlobal.mealsPath + data[n].imangeName;
                }
                vm.meals = data;
            });
        };
        vm.init();
    });