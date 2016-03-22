vikingStore.controller('ProductsCtrl', [
  '$scope', 'products', 'categories', 
  function($scope, products, categories){

  $scope.products = products;
  $scope.categories = categories;
  $scope.filterCategory = undefined;

}]);