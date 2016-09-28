"use strict";

app.controller('ProductCtrl', 
  [ "$scope", "productsService", "$stateParams","cartService",
  function($scope, productsService, $stateParams, cartService) {

  $scope.quantity = 1;

  $scope.product = productsService.getProduct($stateParams.productId);
  
  $scope.addItem = function(){
  	cartService.addItem($scope.product, $scope.quantity);
  };

}]);

