var VikingStore = angular.module('VikingStore', ['ui.router']);


// inject the services provided by ui-router
VikingStore.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/products');

    $stateProvider
      .state('products', {
        url: '/products',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('products.index', {
        url: '',
        templateUrl: 'javascript/templates/products/index.html',
        controller: 'ProductsIndexCtrl',
      })
      .state('products.show', {
        url: '/:id',
        templateUrl: 'javascript/templates/products/show.html',
        controller: 'ProductsShowCtrl'
      });

  }]);

VikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});