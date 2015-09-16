clothingStore.directive("productDirective", function(){

  return {
    templateUrl: "js/directives/product.html",
    restrict: "E",
    scope: {
      product: "=",
      findCategory: "&",
      addToCart: "&"
    }
  };
});