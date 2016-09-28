app.controller("productShowCtrl",["$scope", "productsService", "$stateParams", function($scope, productService, $stateParams) {


  $scope.product = productService.getProduct($stateParams.id);
  $scope.categories = productService.getCategories();
  $scope.quantity = 1;

  $scope.increaseQuantity = function() {
    $scope.quantity++;
  }

  $scope.decreaseQuantity = function() {
    if($scope.quantity > 0) {
      $scope.quantity--;
    }
  }

}])