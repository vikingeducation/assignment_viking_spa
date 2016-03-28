viking.controller('CartsCtrl', ['$scope', '$stateParams', 'cartService', function($scope, $stateParams, cartService) {

  console.log('got to carts controller');

  $scope.cartContents = cartService.listAll();

  $scope.addItem = function(object, quantity) {
    cartService.addItem(object, quantity);
  };

  $scope.removeItem = function(object) {
    cartService.removeItem(object);
  };


}])