vikingStore.controller('ProductCtrl',
  ['$scope', '$stateParams', 'productService',
  function($scope, $stateParams, productService) {

    $scope.product = productService.findProduct(Number($stateParams.id));
    $scope.quantity = 1;

}]);