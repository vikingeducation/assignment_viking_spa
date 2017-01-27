store.directive('product', function() {
  return {
    templateUrl: '/js/directives/product.html',
    scope: {
      product: "=",
      addToCart: '&'
    },
    restrict: 'E'
  }
});
