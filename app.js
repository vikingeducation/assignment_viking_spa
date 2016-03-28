var store = angular.module('Store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state('products',
    {
      url: "/",
      templateUrl: "partials/products.html",
      controller: "ProductsCtrl"
  })

  .state('products.index',
    {
      url: "",
      templateUrl: "partials/products.html"
    })

  .state('products.show',
    {
      url: "/:product_id",
      templateUrl: "partials/product.html"
    });
});
