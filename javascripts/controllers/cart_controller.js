app.controller("CartCtrl", ['$scope', 'cartService', function($scope, cartService){

  $scope.cart = cartService.listAll();

  $scope.cartLength = Object.keys($scope.cart).length;

}])