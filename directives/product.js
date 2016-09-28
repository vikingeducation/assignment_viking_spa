app.directive("product", function() {

  return {
    restrict: "E",
    templateUrl: "directives/product.html",
    scope: {
      product: "=",
      categories: "=",
      addToCart: "&"
    }
  }
});

