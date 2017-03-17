var Spa = angular.module("Spa", ['ui.router']);

Spa.config(function($stateProvider, $urlRouterProvider) {

  // set a default state for all nonexistent routes
  // this is your "else" state
  $urlRouterProvider.otherwise("/products");

  // set up some states on $stateProvider
  $stateProvider
    // name the state
    .state('products', {
      // set the path to your state
      url: "/products",
      // set the template for your state
      templateUrl: "js/templates/products.html",
      // name an existing controller for your route
      controller: "StoreCtrl"
    })


    .state('products.index', {
      url: "/index",
      templateUrl: "js/templates/products.html", //to be changed
      controller: "StoreCtrl"
    })

    .state("products.show", {
      url: "/:productID",
      templateUrl: 'js/templates/product_show.html',
      controller: "ProductCtrl"
    })
});

Spa.factory('_', ['$window', function($window) {
  return $window._;
}]);

Spa.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});