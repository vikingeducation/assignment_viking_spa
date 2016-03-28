var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise("");

   $stateProvider

    .state('landing', {
      url: '',
      templateUrl: 'js/templates/landing.html'
    })

    .state('landing.products',{
      url: '/products',
      templateUrl: 'js/templates/products/products.html',
      controller: 'productCtrl'
    })

   .state('landing.products.index',{
      url: '/index',
      templateUrl: 'js/templates/products/index.html'
    })

   .state('landing.products.show',{
    url: '/show/:id/',
    templateUrl: 'js/templates/products/show.html', 
    controller: function( $scope, $stateParams ){ 
        $scope.currentProduct = $scope.productList[$stateParams.id-1];
      },
   });

});
