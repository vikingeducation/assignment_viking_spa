var store = angular.module('store', ['ui.router'])

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/products")

  $stateProvider
    .state('products',{
      url: "/products",
      templateUrl: "/js/partials/products.html",
      controller: "ProductsCtrl"
    })
    .state('cart', {
      url:"/cart",
      templateUrl: '/js/partials/cart.html',
      controller: "CartCtrl"
    })
    .state('checkout', {
      url:"/checkout",
      abstract: true,
      template: "<div class='checkout' ui-view></div>",
      controller: 'CheckoutCtrl'
    })
    .state('checkout.address', {
      url: "",
      templateUrl: "/js/partials/checkout/address.html"
    })
    .state('checkout.payment', {
      url: "/payment",
      templateUrl: "/js/partials/checkout/payment.html"
    })
    .state('checkout.confirm', {
      url: "/confirm",
      templateUrl: "/js/partials/checkout/confirm.html"
    })
    .state('checkout.feedback', {
      url: '/feedback',
      templateUrl: "/js/partials/checkout/feedback.html"
    })
    .state('show', {
      url:"/:productId",
      templateUrl: '/js/partials/product.html',
      controller: "ProductCtrl"
    })
})
