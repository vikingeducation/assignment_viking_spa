store.controller('ProductCtrl', ['$scope', '$stateParams', 'productService'
  function($scope, $stateParams, productService) {
    $scope.product = productService.find($stateParams.productId)
  }]);