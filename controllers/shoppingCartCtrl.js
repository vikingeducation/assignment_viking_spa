store.controller('shoppingCartCtrl',
  ['$scope', 'shoppingCart',
  function($scope, shoppingCart) {

  $scope.cartItems = shoppingCart.listAll();


}]);