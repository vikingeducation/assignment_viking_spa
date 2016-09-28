var app = angular.module("storeFront", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products')

  $stateProvider.state("products", {
      url: "/products",
      templateUrl: "/templates/products.html",
      controller: "ProductsCtrl"
    }

  ).state("products.index", {
    url:"/index",
    templateUrl: "/templates/productsIndex.html",
    controller: "ProductsCtrl"
  })
})