app.controller("productShowCtrl",["$scope", "productsService", "$stateParams", function($scope, productService, $stateParams) {

console.log($stateParams.id)
  $scope.product = productService.getProduct($stateParams.id);

  
}])