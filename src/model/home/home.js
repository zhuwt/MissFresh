/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', ['ui.bootstrap'])
    .controller('thisApp.homeController', function ($location,$http,categoryService) {
        var vm = this;

        var buttonImagePath = 'src/resource/image/button/';
        vm.timerObj = null;
        vm.classification = [];
        vm.jumpToUrl = function (url) {
            $location.path(url);
        };
        
        vm.getCategory = function () {
            categoryService.getAllCategory(function (data) {
                vm.classification = data;
            });
        };

        vm.getCategory();

        vm.Interval = 2000;
        vm.noWrapSlides = true;
        vm.active = 0;
        var slides = vm.slides = [
            {
                id:0,
                image:'src/resource/image/carousel/Desert.jpg',
                text:'1'

            }
            ,{
                id:1,
                image:'src/resource/image/carousel/Chrysanthemum.jpg',
                text:'2'
            }
            ,{
                id:2,
                image:'src/resource/image/carousel/Hydrangeas.jpg',
                text:'3'
            }];

        vm.images = [
            {
                active: true,
                imageName:'src/resource/image/carousel/Desert.jpg'
            }
            ,{
                active: false,
                imageName:'src/resource/image/carousel/Desert.jpg'
            }
            ,{
                active: false,
                imageName:'src/resource/image/carousel/Hydrangeas.jpg'
            }
        ];

        vm.buttonInfo = [
            {
                imageName:buttonImagePath + 'button.png',
                contentName:'精选套餐',
                url:'#/meals'
            }
            ,{
                imageName:buttonImagePath + 'button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imageName:buttonImagePath + 'button.png',
                contentName:'购物车',
                url:'#/cart'
            }
            ,{
                imageName:buttonImagePath + 'button.png',
                contentName:'我的信息',
                url:'#/account'
            }
        ];
    });