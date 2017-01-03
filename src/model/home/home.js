/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', ['ui.bootstrap','ngAnimate'])
    .controller('thisApp.homeController', function ($rootScope,$location,$http,categoryService,$scope) {
        var vm = this;

        $rootScope.mfGlobal_title = '小鲜来了';
        $rootScope.MFDisplayCart = false;

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

        vm.Interval = 3*1000;
        vm.noWrapSlides = true;
        vm.active = 0;
        var slides = vm.slides = [
            {
                id:0,
                image:MFGlobal.carouselImagePath+'Desert.jpg',
                text:'1'

            }
            ,{
                id:1,
                image:MFGlobal.carouselImagePath+'Chrysanthemum.jpg',
                text:'2'
            }
            ,{
                id:2,
                image:MFGlobal.carouselImagePath+'Hydrangeas.jpg',
                text:'3'
            }];

        vm.images = [
            {
                active: true,
                imageName:MFGlobal.carouselImagePath+'Desert.jpg'
            }
            ,{
                active: false,
                imageName:MFGlobal.carouselImagePath+'Desert.jpg'
            }
            ,{
                active: false,
                imageName:MFGlobal.carouselImagePath+'Hydrangeas.jpg'
            }
        ];

        vm.buttonInfo = [
            {
                imageName:MFGlobal.buttonImagePath + 'button.png',
                contentName:'精选套餐',
                url:'#/meals'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + 'button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + 'button.png',
                contentName:'购物车',
                url:'#/cart'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + 'button.png',
                contentName:'我的信息',
                url:'#/account'
            }
        ];
    });