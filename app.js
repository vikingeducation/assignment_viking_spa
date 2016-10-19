var storeApp = angular.module("StoreApp", ['ui.router']);
var a;
storeApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/products");

  $stateProvider.state('products', {
    url: "/products",
    template: "<div ui-view></div>",
    abstract: true
  }).state('products.index', {
    url: "",
    templateUrl: "templates/products.html",
    controller: "ProdsCtrl"
  }).state('products.show', {
    url: "/:id",
    templateUrl: "templates/show.html",
    controller: "ProdsCtrl"
  })
});
