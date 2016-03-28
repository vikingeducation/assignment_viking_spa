var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/products/index');

    $stateProvider.state('products', {
        url: '/products',
        controller: 'ProductsCtrl',
        templateUrl: "templates/products.html",
        resolve: {
          products: ['ProductsService', function(ProductsService) {
            return ProductsService.getProducts();
          }],
          categories: ['ProductsService', function(ProductsService) {
            return ProductsService.getCategories();
          }]
        }
    }).state('products.index', {
        url: '/index',
        templateUrl: 'templates/products/index.html',
        controller: 'ProductsIndexCtrl'
    }).state('products.show', {
        url: '/:id',
        templateUrl: 'templates/products/show.html',
        controller: 'ProductsShowCtrl',
        resolve: {
          product: ['$stateParams', 'ProductsService', function($stateParams, ProductsService) {
              return ProductsService.getProduct($stateParams.id);
          }]
        }
    });
});
