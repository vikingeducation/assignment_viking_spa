var store = angular.module('store', ['ui.router'])

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index")

  $stateProvider 
    .state('index',{
      url: "/index",
      templateUrl: "/js/partials/products.html",
      controller: "productsCtrl"

    })

})