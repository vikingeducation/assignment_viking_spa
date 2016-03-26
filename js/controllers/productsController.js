vikingStore.controller('ProductsCtrl', [
  '$scope', 'products', 'categories', 'cartService', 
  function($scope, products, categories, cartService){

  $scope.products = products;
  $scope.categories = categories;
  $scope.filterCategory = undefined;

  $scope.addItem = function(item, quantity){
    cartService.addItem(item, quantity);
  };

  $scope.updateFilter = function(categoryID){
    $scope.filterCategory = categoryID;
  };

}]);