vikingStore.controller('CartCtrl',
  ['$scope', 'shoppingCart',
  function($scope, shoppingCart) {

    $scope.cartItems = shoppingCart.listAll();

  }]);