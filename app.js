var VikingStore = angular.module('VikingStore', ['ui.router']);

VikingStore.config = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

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
}

VikingStore.factory('_', ['$window', function($window) {return $window._;}]);

VikingStore.factory('faker', ['$window', function($window) {return $window.faker}]);