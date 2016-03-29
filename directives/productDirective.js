store.directive('product', function(){
  return {
    templateUrl: 'directives/templates/productDirective.html',
    restrict: 'A',
    scope: {
      prod: "=",
      addProduct: "&",
      increment: "="
    }
  };
});
