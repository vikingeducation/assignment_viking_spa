var clothingStore = angular.module('clothingStore', ['ui.router']);

clothingStore.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/index');

  // Products index
  $stateProvider.state('index',{
      url: '',
      templateUrl: 'js/partials/index.html',
      controller: 'MainCtrl'
    });

  // Product show
  $stateProvider.state('show',{
      url: '/show/:productID',
      templateUrl: 'js/partials/show.html',
      controller: 'MainCtrl'
    });

  // Cart show
  $stateProvider.state('cart',{
      url: '/cart',
      templateUrl: 'js/partials/cart.html',
      controller: 'MainCtrl'
    });

});


// Error handling
clothingStore.run(function($rootScope){
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});