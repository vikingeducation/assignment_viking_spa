var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/products");


  $stateProvider
    .state('products', {
      url: "",
      abstract: true,
      template: '<div ui-view></div>',
      controller: "ProductsCtrl"
    })

    .state("products.index", {
      url: "",
      templateUrl: "/javascripts/templates/products.html"
      //should inherit it's parent controller
    })

});





app.factory('_', ['$window', function($window) {
  return $window._; 
}]);