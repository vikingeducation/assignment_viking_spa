VikingStore.directive("product", function() {
  return {
    templateUrl: "directives/product.html",
    restrict: "E",
    scope: { product: '=' }
  }
})