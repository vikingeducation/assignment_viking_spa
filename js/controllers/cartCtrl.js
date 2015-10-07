vikingStore.controller('CartCtrl',
  ['$scope', 'shoppingCart',
  function($scope, shoppingCart) {

    $scope.cartItems = shoppingCart.listAll();


    $scope.updateCart = function() {
      shoppingCart.updateCart($scope.cartItems);
    };

  }]);