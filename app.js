var app = angular.module("storeFront", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products')

  $stateProvider.state("products", {
      url: "/products",
      templateUrl: "/templates/products.html",
      abstract: true
    }

  ).state("products.index", {
    url:"",
    templateUrl: "/templates/productsIndex.html",
    controller: "ProductsCtrl"
  })
})