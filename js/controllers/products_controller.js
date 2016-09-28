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

  $scope.getProducts = function(){
    if ($scope.sortegory){
      var product_ids = $scope.categories[$scope.sortegory].product_ids;
      var filtered = [];
      product_ids.forEach(function(el){
        filtered.push($scope.products[el]);
      });
      return filtered;
    } else {
      return $scope.products;
    }
  };

  $scope.getCart = function() {
    CartsService.getCart();
  };

  // $scope.cart = CartsService.getCart;
  //
  // $scope.testingCartService = function() {
  //   console.log($scope.products);
  //   for (var i = 0; i < Object.keys($scope.products).length; i++) {
  //     CartsService.addItem($scope.products[i]);
  //     console.log($scope.products[i]);
  //   }
  //   return $scope.cart();
  // };

}]);
