app.directive('productTemplate', function(){
  return{
    templateUrl: 'js/directives/product_partial.html',
    restrict: "E",
    scope: {product: "="}
  }
})