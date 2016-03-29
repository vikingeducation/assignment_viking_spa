var store = angular.module('Store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/products");

  $stateProvider

  .state('products',
    {
      url: "",
      templateUrl: "partials/wrapper.html",
      controller: "ProductsCtrl"
  })

  .state('products.cart',
    {
      url: "/cart",
      templateUrl: "partials/shoppingCart.html",
      controller: "CartCtrl"
    })

  .state('products.index',
    {
      url: "/products",
      templateUrl: "partials/products.html",
      controller: "ProductsCtrl"
    })

  .state('products.show',
    {
      url: "/products/:id",
      templateUrl: "partials/product.html",
      controller: "ProductsCtrl"
    })

  .state('products.show.description', {
    url: "",
    templateUrl: "partials/description.html",
    controller: "ProductsCtrl"
  })

  .state('products.show.ratings', {
    url: "",
    templateUrl: "partials/ratings.html",
    controller: "ProductsCtrl"
  })
});
