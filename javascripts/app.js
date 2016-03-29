var vikingStore = angular.module( 'vikingStore',['ui.router', 'fakerModule'] );

vikingStore.config( function( $stateProvider, $urlRouterProvider ){

  // Set our root / default path
  $urlRouterProvider.otherwise("/products/index");

  $stateProvider

    .state('products', {
      url: '/products',
      templateUrl: 'javascripts/templates/products.html',
      controller: 'productCtrl'
    })
    .state('products.index', {
      url: '/index',
      templateUrl: 'javascripts/templates/products_index.html',
      controller: 'productCtrl'
    })
    .state('products.show', {
      url: '/:productId',
      templateUrl: 'javascripts/templates/products_show.html',
      controller: 'productCtrl'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'javascripts/templates/cart.html',
      controller: 'productCtrl'
    })
});

//

// ADDING ERROR HANDLING
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
