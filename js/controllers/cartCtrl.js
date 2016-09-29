"use strict";

app.controller('CartIndexCtrl',
	["$scope", "_", "cartService", function($scope, _, cartService){

	$scope.cart = cartService.listAll();

  $scope.total = function(){
    return cartService.getTotal();
  };


  $scope.add = function(item) {
    cartService.addItem(item, 1);
  };

  $scope.minus = function(item) {
    cartService.addItem(item, -1);
  };

  $scope.delete = function(item) {
    cartService.deleteItem(item);
  };

}]);