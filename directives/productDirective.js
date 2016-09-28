spa.directive('product', function(){

  return {
    templateUrl: '/directives/product_template.html',
    restrict: "E",
    scope: {
      product: '='
    }
  }

})
