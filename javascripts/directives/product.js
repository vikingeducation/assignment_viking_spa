viking.directive('product', function(){
  return {
    templateUrl: "javascripts/directives/product.html",
    restrict: "E",
    // things our directive can use:
    scope: {
      product: "=",
      addToCart: '&'
    }
  };
})