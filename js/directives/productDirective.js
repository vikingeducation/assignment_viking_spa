store.directive('product', function(){
  return {
    templateUrl: "js/templates/products/product.html",
    restrict: "E",
    scope: {
      product: '=',
      addItem: '&'
    }
  };
});
