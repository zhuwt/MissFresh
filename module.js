/**
 * Created by Bucky.Zhu on 08/04/2016.
 */
var MissFreshModel = angular.module('MFService', ['LocalStorageModule']);
var routeApp = angular.module('thisApp',[
    'ngRoute'
    ,'MFService'
    ,'thisApp.home'
    ,'thisApp.detail'
    ,'thisApp.cart'
    ,'thisApp.menu'
    ,'thisApp.orders'
    ,'thisApp.order'
    ,'thisApp.login'
    ,'thisApp.account'
    ,'thisApp.address'
    ,'thisApp.editAddress'
    ,'thisApp.password'
    ,'ui.bootstrap'
    ,'thisApp.meals'
    ,'thisApp.category'
    ,'thisApp.auth'
    ,'thisApp.goods'
]);