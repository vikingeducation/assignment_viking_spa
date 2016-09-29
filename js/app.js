var app = angular.module('store', ['ui.router']);

//lodash
app.factory('_', ['$window', function($window){
  return $window._;
}]);

//routes
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products');
  $stateProvider
    .state('cart',{
      url:'/cart',
      templateUrl: 'cartIndex.html',
      controller: 'CartIndexCtrl'
    })
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view></div>',
      
    })
    .state('products.index', {
      url: '',
      templateUrl: 'products.html',
      controller: 'StoreCtrl'
    })
    .state('products.show', {
      url: "/:productId",
      templateUrl:'product.html',
      controller: 'ProductCtrl'
    })
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});