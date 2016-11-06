/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
var MFGlobal = {};
MFGlobal.baseUrl = 'http://localhost:8912';
MFGlobal.category = 'src/resource/image/classic';
MFGlobal.detailPath = 'src/resource/image/detail/';
MFGlobal.carouselImagePath = 'src/resource/image/carousel';
MFGlobal.buttonImagePath = 'src/resource/image/button';
angular.module('thisApp.home', ['ui.bootstrap'])
    .controller('thisApp.homeController', function ($location,$http,categoryService) {
        var vm = this;

        // $rootScope.MFGlobal = {};
        // $rootScope.MFGlobal.baseUrl = 'http://localhost:8912';
        // $rootScope.MFGlobal.category = 'src/resource/image/classic';
        // $rootScope.MFGlobal.detailPath = 'src/resource/image/detail/';
        // $rootScope.MFGlobal.carouselImagePath = 'src/resource/image/carousel';
        // $rootScope.MFGlobal.buttonImagePath = 'src/resource/image/button';

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
                image:MFGlobal.carouselImagePath+'/Desert.jpg',
                text:'1'

            }
            ,{
                id:1,
                image:MFGlobal.carouselImagePath+'/Chrysanthemum.jpg',
                text:'2'
            }
            ,{
                id:2,
                image:MFGlobal.carouselImagePath+'/Hydrangeas.jpg',
                text:'3'
            }];

        vm.images = [
            {
                active: true,
                imageName:MFGlobal.carouselImagePath+'/Desert.jpg'
            }
            ,{
                active: false,
                imageName:MFGlobal.carouselImagePath+'/Desert.jpg'
            }
            ,{
                active: false,
                imageName:MFGlobal.carouselImagePath+'/Hydrangeas.jpg'
            }
        ];

        vm.buttonInfo = [
            {
                imageName:MFGlobal.buttonImagePath + '/button.png',
                contentName:'精选套餐',
                url:'#/meals'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + '/button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + '/button.png',
                contentName:'购物车',
                url:'#/cart'
            }
            ,{
                imageName:MFGlobal.buttonImagePath + '/button.png',
                contentName:'我的信息',
                url:'#/account'
            }
        ];
    });