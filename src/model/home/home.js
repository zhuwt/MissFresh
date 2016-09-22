/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', ['ui.bootstrap'])
    .controller('thisApp.homeController', function ($location,$timeout) {
        var vm = this;
        var imagePaht = 'src/resource/image/classic/';
        var buttonImagePaht = 'src/resource/image/button/';
        vm.timerObj = null;
        vm.jumpToUrl = function (url) {
            $location.path(url);
        };

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
                imagePath:'src/resource/image/carousel/Desert.jpg'
            }
            ,{
                active: false,
                imagePath:'src/resource/image/carousel/Desert.jpg'
            }
            ,{
                active: false,
                imagePath:'src/resource/image/carousel/Hydrangeas.jpg'
            }
        ];

        vm.buttonInfo = [
            {
                imagePath:buttonImagePaht + 'button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                contentName:'购物车',
                url:'#/cart'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                contentName:'我的信息',
                url:'#/account'
            }
        ];

        vm.classification = [
            {
                imagePath:imagePaht + 'tomato.jpg',
                url:'/menu/0'
            }
            ,{
                imagePath:imagePaht + 'broccoli.jpg',
                url:'/menu/1'
            }
            ,{
                imagePath:imagePaht + 'cherry.jpg',
                url:'/menu/2'
            }
            ,{
                imagePath:imagePaht + 'clams.jpg',
                url:'/menu/3'
            }
            ,{
                imagePath:imagePaht + 'egg.jpg',
                url:'/menu/2'
            }
            ,{
                imagePath:imagePaht + 'lemon.jpg',
                url:'/menu/1'
            }
            ,{
                imagePath:imagePaht + 'lettuce.jpg',
                url:'/menu/0'
            }
            ,{
                imagePath:imagePaht + 'mango.jpg',
                url:'/menu/1'
            }
            ,{
                imagePath:imagePaht + 'squid.jpg',
                url:'/menu/2'
            }
        ];
    });