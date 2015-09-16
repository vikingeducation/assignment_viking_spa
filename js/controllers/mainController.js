app.controller("MainCtrl", ['$scope', '$stateParams','productService', function($scope, $stateParams, productService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();
  $scope.product = $scope.products[$stateParams.id] ;

}]);

// app.controller("MainCtrl", ['$scope', '$stateParams', 'productService', function($scope, productService, $stateParams){
//   $scope.categories = productService.getCategories();
//   $scope.products = productService.getProducts();

//   $scope.product = $stateParams;

// }])
