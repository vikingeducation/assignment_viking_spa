var spa = angular.module('spa', ['ui.router']);

spa.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('products', {
      url: '',
      abstract: true,
      template: '<div ui-view></div>',
      controller: 'StoreCtrl'
    })

    .state('products.index', {
      url: '',
      templateUrl: '/templates/products.html',
      controller: 'StoreCtrl'
    })

    .state('products.show', {
      url: '/:product_id',
      templateUrl: '/templates/product.html',
      controller: 'StoreShowCtrl'
    })

    .state('cart', {
      url: '/cart',
      templateUrl: '/templates/cart.html',
      controller: 'StoreShowCtrl'
    })

});


spa.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);
