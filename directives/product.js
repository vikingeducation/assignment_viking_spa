VikingStore.directive("product", ['shoppingCartsService', '$timeout', function(shoppingCartsService, $timeout) {
  return {
    templateUrl: "directives/product.html",
    restrict: "E",
    scope: { product: '=' },
    link: function(scope) {
      scope.addItemToCart = function(name, quantity) {
        shoppingCartsService.addItemToCart(name, quantity);
        scope.quantity = "";
        scope.success = "Added to cart!"
        $timeout(function() {
        scope.success = "";
        }, 3000)
      }
    }
  }
}])