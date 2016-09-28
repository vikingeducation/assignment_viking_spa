"use strict";

app.controller('ProductCtrl', 
  [ "$scope", "productsService", "$stateParams","cartService",
  function($scope, productsService, cartService, $stateParams) {

  $scope.quantity = 1;

  $scope.product = productsService.getProduct($stateParams.productId);
  
  $scope.cartNum = function(){
  	return cartService.listAll().length;
  };
  
  $scope.addItem = function(){
  	cartService.addItem($scope.product, $scope.quantity);
  };

}]);

