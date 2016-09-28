var vikingStore = angular.module('vikingStore', ['ui.router']);

vikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);

vikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products")

  $stateProvider

    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsIndexCtrl'
    })

});