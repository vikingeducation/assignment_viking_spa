app.controller("ProductShowCtrl", ['$scope', 'productService', '$stateParams', function($scope, productService, $stateParams){

  $scope.product = productService.find($stateParams.id);

  $scope.quantity = "1";
}]);