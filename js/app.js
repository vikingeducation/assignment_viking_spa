var vikingStore = angular.module('vikingStore', ['ui.router']);

vikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);

vikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products")

  $stateProvider

    .state('products', {
      url: '/products',
      abstract: true,
      templateUrl: 'js/templates/products/main.html',
      controller: function($scope, cart) {
        $scope.getLength = function() {
          return Object.keys(cart).length;
        } 
      },
      resolve: {
        products: function(productsService) {
          return productsService.getProducts();
        },
        cart: function(CartService) {
          return CartService.listAll();
        }
      }
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsIndexCtrl',
      resolve: {
        categories: function(productsService) {
          return productsService.getCategories();
        }
      }
    })
    .state('products.cart', {
      url: '/cart',
      templateUrl: 'js/templates/products/cart.html',
      controller: 'ProductsCartCtrl'
    })
    .state('products.checkout', {
      url: '/checkout',
      template: '<div ui-view></div>',
      abstract: true,
      resolve : {
        form: function(FormService) {
          return FormService.getForm();
        }
      }
    })
    .state('products.checkout.personalInfo', {
      url: '/personalInfo',
      templateUrl: 'js/templates/products/checkoutPersonalInfo.html',
      controller: 'ProductsCheckoutCtrl'
    })
    .state('products.checkout.addressInfo', {
      url: '/addressInfo',
      templateUrl: 'js/templates/products/checkoutAddressInfo.html',
      controller: 'ProductsCheckoutCtrl'
    })
    .state('products.checkout.paymentInfo', {
      url: '/paymentInfo',
      templateUrl: 'js/templates/products/checkoutPaymentInfo.html',
      controller: 'ProductsCheckoutCtrl'
    })
    .state('products.checkout.confirm', {
      url: '/confirm',
      templateUrl: 'js/templates/products/checkoutConfirm.html',
      controller: 'ProductsCheckoutCtrl'
    })
    .state('products.checkout.orderPlaced', {
      url: '/orderPlaced',
      templateUrl: 'js/templates/products/checkoutOrderPlaced.html',
      controller: 'ProductsCheckoutCtrl'
    })
    .state('products.show', {
      url: '/:id',
      templateUrl: 'js/templates/products/show.html',
      controller: 'ProductsShowCtrl'
    })

});