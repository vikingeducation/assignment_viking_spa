store.directive('product', function() {
  return {
    templateUrl: '/js/directives/product.html',
    scope: {
      product: "="
    },
    restrict: 'E'
  }
});