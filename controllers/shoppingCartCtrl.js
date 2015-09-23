store.controller('shoppingCartCtrl',
  ['$scope', 'shoppingCart',
  function($scope, shoppingCart) {

  $scope.cartItems = shoppingCart.listAll();

  $scope.updateCart = function(product, quantity){
    console.log("update with quantity "+quantity);
    shoppingCart.update(product, quantity);
  };


}]);