app.controller('ProductsCtrl',
['$scope',
'products',
'categories',
'_',
function($scope, products, categories, _) {
  $scope.sortegory = "";
  $scope.products = products;
  $scope.categories = categories;

  $scope.getProducts = function(){
    if ($scope.sortegory){
      console.log($scope.sortegory)
      var product_ids = $scope.categories[$scope.sortegory].product_ids;

      var filtered = [];
      product_ids.forEach(function(el){
        filtered.push($scope.products[el]);
      });

      return filtered;
    } else {
      return $scope.products;
    }
  }
}]);
