var VikingStore = angular.module("VikingStore", ['ui.router']);


VikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/signin");

  $stateProvider

    .state('products', {
      url: '/products',
      templateUrl: "js/templates/products.html",
      controller: "ProductCtrl"
    })

    .state('cart', {
      url: '/cart',
      templateUrl: "js/templates/cart.html",
      controller: "ProductCtrl"
    })

    .state('products.show', {
      url: '/:productId',
      templateUrl: 'js/templates/show.html'
    })

    .state('about', {
      url: "/about",
      templateUrl: "js/templates/about.html"
    })

    .state('signin', {
      url: '/signin',
      templateUrl: 'js/templates/signin.html'
    });
});


VikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
