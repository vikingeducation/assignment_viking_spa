app.controller("MainCtrl", ['$scope', 'productService', function($scope, productService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();

}])

// app.controller("MainCtrl", ['$scope', '$stateParams', 'productService', function($scope, productService, $stateParams){
//   $scope.categories = productService.getCategories();
//   $scope.products = productService.getProducts();

//   $scope.product = $stateParams;

// }])
