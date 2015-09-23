var store = angular.module("store", ['ui.router'] );



store.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products/index");

  $stateProvider

    .state("products", {
      url: '/products',
      templateUrl: 'templates/products/products-layout.html',
      controller: 'productsCtrl'
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'templates/products/index.html',
      controller: 'productsCtrl'
    })

    .state("products.show", {
      url: '/:id',
      templateUrl: 'templates/products/show.html',
      controller: 'productsCtrl'
    })

    .state("cart", {
      url: '/cart',
      templateUrl: 'templates/cart/cart-layout.html',
      controller: 'shoppingCartCtrl'
    })

    .state("cart.show", {
      url: '/show',
      templateUrl: 'templates/cart/show.html',
      controller: 'shoppingCartCtrl'
    })

    .state("cart.checkout", {
      url: '/checkout',
      templateUrl: 'templates/cart/checkout.html',
      controller: 'shoppingCartCtrl'
    })

    .state("cart.checkout.addresses", {
      url: '/addresses',
      templateUrl: 'templates/cart/checkout-addresses.html',
      controller: 'shoppingCartCtrl'
    })

    .state("cart.checkout.payment", {
      url: '/payment',
      templateUrl: 'templates/cart/checkout-payment.html',
      controller: 'shoppingCartCtrl'
    })

    .state("cart.checkout.confirm", {
      url: '/confirm',
      templateUrl: 'templates/cart/checkout-confirm.html',
      controller: 'shoppingCartCtrl'
    })

});