vikingStore.controller('productCtrl',
  ['$scope', 'productService', '$stateParams',
  function($scope, productService, $stateParams) {

    $scope.id = Number($stateParams.productId);

    $scope.categoryId = 'All Products';

    $scope.products = productService.getProducts();
    $scope.categories = productService.getCategories();

     
    $scope.showProduct = $scope.products[id];
    console.log("Selected product is " + $scope.showProduct);

    // $scope.applyFilter = function(categoryN) {
    //   console.log(categoryN);
    //   $scope.categoryName = categoryN;
    // }

    $scope.print = function() {
      console.log("State params is " + $stateParams.productId);
    }

  }]);
