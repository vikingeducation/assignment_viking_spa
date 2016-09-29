app.controller('ProductsCtrl',
['$scope',
'products',
'categories',
'_',
'CartsService',
function($scope, products, categories, _, CartsService) {
  $scope.sortegory = "";
  $scope.products = products;
  $scope.categories = categories;
  $scope.filteredProducts = $scope.products;
  $scope.$watch("sortegory", function(sortegory){
    if ($scope.sortegory){
      var product_ids = $scope.categories[$scope.sortegory].product_ids;
      var filtered = [];
      product_ids.forEach(function(el){
        filtered.push($scope.products[el]);
      });
      $scope.filteredProducts = filtered;
    } else {
      $scope.filteredProducts = $scope.products;
    }
  });

  $scope.getCart = function() {
    CartsService.getCart();
  };
}]);
