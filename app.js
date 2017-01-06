// ----------------------------------------
// App
// ----------------------------------------

var VikingSPA = angular.module('VikingSPA', ['ui.router']);


VikingSPA.factory('_', ['$window', function($window) {
  return $window._;
}]);


VikingSPA.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      abstract: true,
      url: '/products',
      controller: 'ProductsCtrl',
      template: '<div ui-view></div>'
    })
    .state('products.index', {
      url: '',
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

}]);




