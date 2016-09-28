var app = angular.module("storeFront", ["ui.router", "faker"])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products')

  $stateProvider.state("products", {
      url: "/products",
      templateUrl: "/templates/products.html",
      controller: "ProductsCtrl"
    }

  )

})