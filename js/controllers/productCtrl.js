"use strict";

app.controller('ProductCtrl', 
  [ "$scope", "productsService", "$stateParams",
  function($scope, productsService, $stateParams) {


    console.log($stateParams);
  $scope.product = productsService.getProduct($stateParams.productId);
  
  
}]);

