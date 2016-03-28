var viking = angular.module('viking', ['ui.router']);

viking.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider

    .state('products', {
      url: '/products',
      controller: 'ProductsCtrl',
      template: '<div ui-view></div>'
    })

    .state('products.show', {
      url: '/:id',
      controller: 'ProductsCtrl',
      templateUrl: 'javascripts/templates/products/show.html'
    })

    .state('products.index', {
      url: '/index',
      controller: 'ProductsCtrl',
      templateUrl: 'javascripts/templates/products/index.html'
    })

    .state('cart', {
      url: '/cart',
      controller: 'CartCtrl',
      templateUrl: 'javascripts/templates/carts/show.html'
    })


});


