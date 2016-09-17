/**
 * Created by Bucky.Zhu on 07/18/2016.
 */
angular.module('thisApp.home', [])
    .controller('thisApp.homeController', function ($location) {
        var vm = this;
        var imagePaht = 'src/resource/image/classic/';
        var buttonImagePaht = 'src/resource/image/button/';
        vm.jumpToUrl = function (url) {
            $location.path(url);
        };

        vm.buttonInfo = [
            {
                imagePath:buttonImagePaht + 'button.png',
                url:'/cart'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                url:'/cart'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                url:'/cart'
            }
            ,{
                imagePath:buttonImagePaht + 'button.png',
                url:'/cart'
            }
        ];

        vm.classification = [
            {
                imagePath:imagePaht + 'tomato.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'broccoli.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'cherry.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'clams.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'egg.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'lemon.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'lettuce.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'mango.jpg',
                url:'/menu'
            }
            ,{
                imagePath:imagePaht + 'squid.jpg',
                url:'/menu'
            }
        ];

    });