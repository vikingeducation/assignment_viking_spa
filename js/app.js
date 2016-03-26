var vikingStore = angular.module( 'vikingStore', ['ui.router'] );

vikingStore.config( function( $provide, $stateProvider, $urlRouterProvider ){
  $urlRouterProvider.otherwise('products/index');

  $stateProvider

    // Abstract state used here, so this first 'products' state is never
    // directly accessed, and instead sets up data for index and show
    // children who inherit resolves and controller.  For the show state
    // we use a "paired" controller in order to grab the product using
    // $stateParams

    // see here for more details
    // https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views#abstract-states
    
    .state('products', {
      abstract: true,
      url: '/products',
      templateUrl: "js/templates/products.html",
      controller: 'ProductsCtrl',
      resolve: {
        products: function( productService ){
          return productService.allProducts();
        },
        categories: function( productService ){
          return productService.allCategories();
        }
      }
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'js/templates/products/_index.html'
    })

    .state('products.show', {
      url: '/:id',
      templateUrl: 'js/templates/products/_show.html',
      controller: function($scope, $stateParams, productService){
        $scope.product = productService.getProduct( $stateParams.id );
      }
    })

    .state('cart', {
      url: '/cart',
      templateUrl: "js/templates/cart.html",
      controller: "CartCtrl"
    });

});


vikingStore.run(function($rootScope, $document){
  // debug
  $rootScope.$on("$stateChangeError", console.log.bind(console));

  // force ui-view to scroll to top when changing state
  $rootScope.$on('$stateChangeSuccess', function() { 
    $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
  });
});