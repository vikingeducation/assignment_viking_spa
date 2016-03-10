// ----------------------------------------
// App
// ----------------------------------------

var VikingSPA = angular.module('VikingSPA', ['ui.router']);

VikingSPA.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      url: '/products',
      controller: 'ProductsCtrl',
      templateUrl: 'templates/products/products.html'
    })
    .state('products.index', {
      url: '/index',
      controller: 'ProductsCtrl',
      templateUrl: 'templates/products/index.html'
    })
    .state('products.show', {
      url: '/:id',
      controller: 'ProductsCtrl',
      templateUrl: 'templates/products/show.html'
    })
    .state('cart', {
      url: '/cart',
      controller: 'CartsCtrl',
      templateUrl: 'templates/carts/show.html'
    });

});




