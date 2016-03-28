var store = angular.module('store', ['ui.router'])


store.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products/index');

  $stateProvider.state('products', {
    url: '/products',
    templateUrl: 'products.html'
  }).state('products.index', {
    url: '/index',
    templateUrl: 'products/index.html',
    controller: 'ProductsIndexCtrl'
  })


})
