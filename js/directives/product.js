app.directive('Product', function() {

  return {
    templateUrl: 'js/directives/product.html',
    scope: {
      product: '='
    }
  };

});
