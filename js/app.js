var vikingStore = angular.module( 'vikingStore', ['ui.router'] );

vikingStore.config( function( $stateProvider, $urlRouterProvider ){
  $urlRouterProvider.otherwise('products/index');

  $stateProvider

    .state('products', {
      url: '/products',
      templateUrl: "js/templates/products.html"
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'js/templates/products/_index.html',
      controller: function( $scope, productService ){
        $scope.products = productService.allProducts();
        $scope.categories = productService.allCategories();
      },
      resolve: {
        init: function(productService){
          return productService.init();
        }
      }
    });
});

// debug
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});