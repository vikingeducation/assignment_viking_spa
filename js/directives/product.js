app.directive('product', ['CartsService', function(CartsService) {
  return {
    templateUrl: 'js/directives/product.html',
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.addItem = function() {
        CartsService.addItem(scope.product);
      };

      scope.getItemQuantity = function() {
        return CartsService.getItemQuantity(scope.product);
      };

      scope.removeItem = function() {
        CartsService.removeItem(scope.product);
      };
    }
  };
}]);
