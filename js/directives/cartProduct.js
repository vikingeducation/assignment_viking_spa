store.directive('product', function() {
  return {
    templateUrl: '/js/directives/cartProduct.html',
    scope: {
      product: "=",
    },
    restrict: 'E'
  }
});
