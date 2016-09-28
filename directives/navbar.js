VikingStore.directive("navbar", ["shoppingCartsService", function(shoppingCartsService) {
  return {
    templateUrl: "directives/navbar.html",
    restrict: "E",
    scope: {
      
    },
    link: function(scope) {
      scope.numItemsInCart = shoppingCartsService.numItems;
    }
  }
}])