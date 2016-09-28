vikingStore.directive('product', [function(){

  return {

    templateUrl: "js/directives/productTemplate.html",
    restrict: "E",
    scope: {
      product: "="
    }
  }

}])