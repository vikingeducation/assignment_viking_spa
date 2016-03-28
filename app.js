var store = angular.module('Store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index");

  $stateProvider

  .state('products',
    {
      url: "/products",
      templateUrl: "partials/products.html",
      controller: "ProductsCtrl"
  })

  .state('products.index',
    {
      url: "/:product_id",
      templateUrl: "partials/product.html"
    })

  .state('products.show',
    {
      url: "/:product_id",
      templateUrl: "partials/product.html"
    })
});
