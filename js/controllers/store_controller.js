Spa.controller("StoreCtrl", ["$scope", "CategoryService", "ProductService", "$stateParams", function($scope, CategoryService, ProductService, $stateParams) {

  $scope.productID;
  $scope.catFilterValue = '';

  $scope.categories = CategoryService.makeCategories();
  $scope.products = ProductService.makeProducts();

  $scope.setCategoryFilter = function() {
    $scope.catFilterValue = $scope.selectedCat;
  }

}]);