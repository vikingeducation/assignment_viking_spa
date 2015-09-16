var store = angular.module("store", ['ui.router'] );



store.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products/index");

  $stateProvider

    .state("products", {
      url: '/products',
      templateUrl: 'templates/products/products-layout.html',
      controller: 'productsCtrl'
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'templates/products/index.html',
      controller: 'productsCtrl'
    })

    .state("products.show", {
      url: '/:id',
      templateUrl: 'templates/products/show.html',
      controller: 'productsCtrl'
    });

});