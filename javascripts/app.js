var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/products/index');

    $stateProvider.state('products', {
        url: '/products',
        template: "<ui-view></ui-view>"
    }).state('products.index', {
        url: '/index',
        templateUrl: 'templates/products/index.html',
        controller: 'ProductsIndexCtrl'
    });
});
