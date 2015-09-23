store.directive('shoppingCartItem', function() {

  return {
    templateUrl: 'directives/shoppingCartItem.html',
    restrict: 'E',
    scope: {
      item: '=',
      updateCart: '&'
    }
  };

});