spa.controller('StoreCtrl', ["$scope", "productService", function($scope, productService){


  $scope.products = productService.getProducts();

}]);
