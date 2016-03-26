vikingStore.directive('cartItem', ['$window', 'cartService', 
  function($window, cartService){

  return {
    templateUrl: 'js/directives/cartItem.html',
    restrict: 'A',
    scope: {
      item: "=",
      removeItem: "&"
    },
    link: function(scope){
      scope.$watch('item.quantity', function(newVal, oldVal) {
        if (newVal < 1 || newVal === undefined) {
          if ( $window.confirm("Do you want to remove this item?") ) {
            cartService.removeItem(scope.item);
          } else {
            scope.item.quantity = oldVal;
          }
        }
      });
    }
  };

}]);