app.directive('product', ['CartsService', function(CartsService) {
  return {
    templateUrl: 'js/directives/product.html',
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.addItem = function() {
        CartsService.addItem(scope.product);
        console.log('this is being added on line 9, product.js');
      };
    }
  };
}]);
