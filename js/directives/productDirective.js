store.directive('product', function(){
  return {
    templateUrl: "js/directives/product.html",
    restrict: "E",
    scope: {
      product: '=',
      addItem: '&'
    }
  };
});
