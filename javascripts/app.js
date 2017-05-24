var app = angular.module('VikingApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products");


  $stateProvider
    .state('products', {
      url: "/products",
      abstract: true,
      template: "<div ui-view></div>"
    })

    .state('products.index', {
      url: "",
      templateUrl: "javascripts/templates/products/index.html",
      controller: "ProductsIndexCtrl"
    })

});

// debugging
app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});