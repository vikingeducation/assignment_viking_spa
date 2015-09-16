var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index");

  $stateProvider.state('main-page', {
    url: '/index',
    templateUrl: 'js/templates/products.html',
    controller: "MainCtrl"
  }).state('product-show-page', {
    url: '/show/:id',
    templateUrl: 'js/templates/show.html',
    controller: "MainCtrl"
  });
});

app.run(function($rootScope){
 $rootScope.$on("$stateChangeError", console.log.bind(console));
});
