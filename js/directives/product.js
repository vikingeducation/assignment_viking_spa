Spa.directive("product", function() {
  return {
    restrict: "A",
    templateUrl: "js/templates/product.html",
    scope: {
      product: "="
    }
  }
})