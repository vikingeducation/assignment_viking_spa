vikingStore.directive('currentProduct', ['CartService', function(CartService){

  return {

    templateUrl: "js/directives/currentProductTemplate.html",
    restrict: "E",
    scope: {
      currentProduct: "="
    },
    link: function(scope) {
      scope.addItem = function(id, quantity) {
        if (quantity === undefined) {
          quantity = 1;
        }
        CartService.addItem(id, quantity);
        scope.currentProductQuantity = "";
      }
    }
  }

}])
