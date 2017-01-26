var store = angular.module('store', ['ui.router'])

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/products")

  $stateProvider
    .state('products',{
      url: "/products",
      templateUrl: "/js/partials/products.html",
      controller: "ProductsCtrl"
    })
    .state('show', {
      url:"/:productId",
      templateUrl: 'js/partials/product.html',
      controller: "ProductCtrl"
    })
    .state('cart', {
      url:"/cart",
      templateUrl: 'js/partials/cart.html',
      controller: "CartCtrl"
    })
})
