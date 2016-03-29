var viking = angular.module('viking', ['ui.router']);

viking.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products');

  $stateProvider

    .state('products', {
      url: '/products',
      // controller: 'ProductsCtrl',
      template: '<div ui-view></div>'
    })

    .state('products.index', {
      url: '/index',
      controller: 'ProductsCtrl',
      templateUrl: 'javascripts/templates/products/index.html'
    })

    .state('products.show', {
      url: '/:id',
      controller: 'ProductsCtrl',
      templateUrl: 'javascripts/templates/products/show.html'
    })

    .state('cart', {
      url: '/cart',
      controller: 'CartsCtrl',
      templateUrl: 'javascripts/templates/carts/show.html'
    })


});




