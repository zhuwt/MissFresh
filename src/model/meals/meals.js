/**
 * Created by zhuwt on 2016/10/10.
 */
angular.module('thisApp.meals', [])
    .controller('thisApp.mealsController', function ($location) {
        var vm = this;
        vm.meals = [
            {
                href:"#/detail/meals/1",
                src:"src/resource/image/meals/mealsA.jpg"
            }
            ,{
                href:"#/detail/meals/2",
                src:"src/resource/image/meals/mealsB.jpg"
            }
            ,{
                href:"#/detail/meals/1",
                src:"src/resource/image/meals/mealsA.jpg"
            }
            ,{
                href:"#/detail/meals/2",
                src:"src/resource/image/meals/mealsB.jpg"
            }
            ,{
                href:"#/detail/meals/1",
                src:"src/resource/image/meals/mealsA.jpg"
            }
            ,{
                href:"#/detail/meals/2",
                src:"src/resource/image/meals/mealsB.jpg"
            }
            ,{
                href:"#/detail/meals/1",
                src:"src/resource/image/meals/mealsA.jpg"
            }
            ,{
                href:"#/detail/meals/2",
                src:"src/resource/image/meals/mealsB.jpg"
            }
        ];
    });