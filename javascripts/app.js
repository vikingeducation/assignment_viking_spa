var vikingStore = angular.module( 'vikingStore',['ui.router'] );

vikingStore.config( function( $stateProvider, $urlRouterProvider ){

  // Set our root / default path
  $urlRouterProvider.otherwise("");

  $stateProvider

    .state('products', {
      url: '',
      templateUrl: 'javascripts/templates/products.html',
      controller: 'javascripts/controllers/productCtrl.js'
    })

});


// ADDING ERROR HANDLING
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
