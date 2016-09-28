vikingStore.directive('currentProduct', [function(){

  return {

    templateUrl: "js/directives/currentProductTemplate.html",
    restrict: "E",
    scope: {
      currentProduct: "="
    },
    link: function(scope) {
      console.log(scope.currentProduct)
    }
  }

}])
