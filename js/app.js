var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise("products");

   $stateProvider

    .state('landing', {
      url: '',
      templateUrl: 'js/templates/landing.html',
      controller: 'productCtrl'
    })

    .state('landing.products',{
      url: '/products',
      templateUrl: 'js/templates/products/products.html',
      controller: 'productCtrl'
    })

    .state('landing.products.index',{
      url: '/index',
      templateUrl: 'js/templates/products/index.html',
      controller: 'productCtrl'
    })

    .state('landing.products.show',{
    url: '/show/:id/',
      templateUrl: 'js/templates/products/show.html',
      controller: 'productCtrl'
    })

    .state('landing.cart', {
      url:'/cart',
      templateUrl: 'js/templates/cart/cart.html',
      controller: 'productCtrl'
    });

});
