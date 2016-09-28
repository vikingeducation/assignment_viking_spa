spa.controller('StoreShowCtrl', ["$scope", '$stateParams', "productService", function($scope, productService, $stateParams){

  $scope.product = productService.findProduct($stateParams.product_id);

}]);
