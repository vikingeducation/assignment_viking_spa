store.controller('shoppingCartCtrl',
  ['$scope', 'shoppingCart',
  function($scope, shoppingCart) {

  $scope.cartItems = shoppingCart.listAll();

  $scope.updateCart = function(product, quantity){
    console.log("update wit quantity "+quantity);
    shoppingCart.update(product, quantity);
  };


}]);