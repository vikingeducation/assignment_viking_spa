var clothingStore = angular.module('clothingStore', ['ui.router']);

clothingStore.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/products');


  // Products
  $stateProvider.state('products',{
    url: '/products',
    templateUrl: '/js/partials/test.html',
    controller: 'MainCtrl'
  });

  // Products index
  $stateProvider.state('products.index',{
      url: '/index',
      templateUrl: 'js/partials/products.html',
      controller: 'MainCtrl',
    });

  // Product show
  $stateProvider.state('products.show',{
      url: '/:productID',
      templateUrl: 'partials/product.html',
      controller: 'MainCtrl',
    });


});


// Error handling
clothingStore.run(function($rootScope){
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});