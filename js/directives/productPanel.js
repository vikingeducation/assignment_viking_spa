vikingStore.directive('productPanel', function(){
  return {
    templateUrl: 'js/directives/productPanel.html',
    restrict: 'A',
    scope: {
      product: "="
    }
  };
});