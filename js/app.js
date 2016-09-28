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
      template: '<div ui-view></div>',
      resolve: {
        products: function(productsService) {
          return productsService.getProducts();
        }
      }
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsIndexCtrl',
      resolve: {
        categories: function(productsService) {
          return productsService.getCategories();
        }
      }
    })
    .state('products.show', {
      url: '/:id',
      templateUrl: 'js/templates/products/show.html',
      controller: 'ProductsShowCtrl'
    })

});
