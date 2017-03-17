Spa.controller("ProductCtrl", ["$scope", "$stateParams", "ProductService", function($scope, $stateParams, ProductService) {

  $scope.product = ProductService.makeProducts()[$stateParams.productID];

}])