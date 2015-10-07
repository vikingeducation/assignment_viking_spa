var vikingStore = angular.module('VikingStore', ['ui.router']);

vikingStore.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products/index");

  $stateProvider
    .state('products', {
      url: '/products',
      templateUrl: 'js/templates/products/layout.html',
      controller: 'ProductsCtrl'
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'js/templates/products/index.html'
    })

    .state('products.show', {
      url: '/:id',
      templateUrl: 'js/templates/products/show.html',
      controller: 'ProductCtrl'
    })


    .state('cart', {
      url: '/cart',
      templateUrl: 'js/templates/cart/index.html',
      controller: 'CartCtrl'
    })

});


// ADDING ERROR HANDLING
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});