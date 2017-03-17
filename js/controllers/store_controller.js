Spa.controller("StoreCtrl", ["$scope", "CategoryService", "ProductService", "$stateParams", "CartService", function($scope, CategoryService, ProductService, $stateParams, CartService) {

  $scope.productID;
  $scope.catFilterValue = '';

  $scope.categories = CategoryService.makeCategories();
  $scope.products = ProductService.makeProducts();

  $scope.setCategoryFilter = function() {
    $scope.catFilterValue = $scope.selectedCat;
  }

  $scope.addProduct = function(objectID) {
    CartService.addItem(objectID, 1);
  }

  $scope.numCartItems = function() {
    return CartService.listAll().length;
  }

}]);