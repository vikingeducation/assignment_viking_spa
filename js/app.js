var vikingStore = angular.module('VikingStore', ['ui.router']);

vikingStore.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products/index");

  $stateProvider
    .state('products', {
      url: '',
      templateUrl: 'js/templates/products/layout.html',
      controller: 'ProductsCtrl'
    })

    .state('products.index', {
      url: 'index',
      templateUrl: 'js/templates/products/index.html'
    })

});


// ADDING ERROR HANDLING
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});