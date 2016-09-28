var app = angular.module("storeFront", ["ui.router"])

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory("_", [ "$window", function($window) {
  return $window._;
}])

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

  .state("products.show", {
    url:"/:id",
    templateUrl: "templates/productShow.html",
    controller: "productShowCtrl"
  })

  .state("cart", {
    url:"/cart",
    templateUrl: "templates/cart.html",
    controller: "cartCtrl"
  })

  .state("cart.neworder", {
    url:"/neworder",
    templateUrl:"templates/newOrder.html",
    controller: "orderNewCtrl"
  })
})