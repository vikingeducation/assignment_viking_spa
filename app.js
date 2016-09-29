var VikingStore = angular.module('VikingStore', ['ui.router']);

VikingStore.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products");

  $stateProvider.state('cart', {
    url: '/cart',
    templateUrl: "templates/cart.html",
    controller: "CartCtrl"
  });

  $stateProvider.state('products', {
    url: '/products',
    abstract: true,
    template: "<div ui-view></div>"
  });

  $stateProvider.state('products.index', {
    url: "",
    templateUrl: "templates/products/index.html", 
    controller: "ProductsIndexCtrl"
  });

  $stateProvider.state('products.show', {
    url: "/:id",
    templateUrl: "templates/products/show.html", 
    controller: "ProductsShowCtrl"
  });

  $stateProvider
    .state('checkout', {
      url: '/checkout',
      templateUrl: "templates/checkout/main.html",
      controller: 'CheckoutCtrl'
    })

    .state('checkout.shipping', {
      url: '/shipping',
      templateUrl: 'templates/checkout/shipping.html'
    })
    .state('checkout.payment', {
      url: '/address',
      templateUrl: 'templates/checkout/payment.html'
    })
    .state('checkout.confirm', {
      url: '/confirm',
      templateUrl: 'templates/checkout/confirm.html'
    });
  
}]);

VikingStore.factory('_', ['$window', function($window) {return $window._;}]);

VikingStore.factory('faker', ['$window', function($window) {return $window.faker}]);

VikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});