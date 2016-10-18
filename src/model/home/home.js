/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', ['ui.bootstrap'])
    .controller('thisApp.homeController', function ($location,$http) {
        var vm = this;
        var imagePaht = 'src/resource/image/classic/';
        var buttonImagePaht = 'src/resource/image/button/';
        vm.timerObj = null;
        vm.classification = [];
        vm.jumpToUrl = function (url) {
            $location.path(url);
        };
        
        vm.getCategory = function () {
            $http.get(
                'http://localhost:8912/category'
            ).then(function successCallback(response) {
                vm.classification.length = 0;
                for (var n=0;n<response.data.length;n++){
                    response.data[n].imageName = imagePaht+response.data[n].imageName;
                    response.data[n].url = "/menu/" + response.data[n].id;
                    vm.classification.push(response.data[n]);
                }
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
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
                imageName:buttonImagePaht + 'button.png',
                contentName:'精选套餐',
                url:'#/meals'
            }
            ,{
                imageName:buttonImagePaht + 'button.png',
                contentName:'我的订单',
                url:'#/orders'
            }
            ,{
                imageName:buttonImagePaht + 'button.png',
                contentName:'购物车',
                url:'#/cart'
            }
            ,{
                imageName:buttonImagePaht + 'button.png',
                contentName:'我的信息',
                url:'#/account'
            }
        ];

        // vm.classification = [
        //     {
        //         imageName:imagePaht + 'tomato.jpg',
        //         url:'/menu/0'
        //     }
        //     ,{
        //         imageName:imagePaht + 'broccoli.jpg',
        //         url:'/menu/1'
        //     }
        //     ,{
        //         imageName:imagePaht + 'cherry.jpg',
        //         url:'/menu/2'
        //     }
        //     ,{
        //         imageName:imagePaht + 'clams.jpg',
        //         url:'/menu/3'
        //     }
        //     ,{
        //         imageName:imagePaht + 'egg.jpg',
        //         url:'/menu/2'
        //     }
        //     ,{
        //         imageName:imagePaht + 'lemon.jpg',
        //         url:'/menu/1'
        //     }
        //     ,{
        //         imageName:imagePaht + 'lettuce.jpg',
        //         url:'/menu/0'
        //     }
        //     ,{
        //         imageName:imagePaht + 'mango.jpg',
        //         url:'/menu/1'
        //     }
        //     ,{
        //         imageName:imagePaht + 'squid.jpg',
        //         url:'/menu/2'
        //     }
        // ];
    });