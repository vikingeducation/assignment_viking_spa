vikingStore.directive('product', ['CartService', function(CartService){

  return {

    templateUrl: "js/directives/productTemplate.html",
    restrict: "E",
    scope: {
      product: "="
    },
    link: function(scope) {
      
      scope.addItem = function(id, quantity) {
        if (quantity === undefined) {
          quantity = 1;
        }
        CartService.addItem(id, quantity);
      }

    }
  }

}])