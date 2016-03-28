vikingStore.controller('productCtrl',
  ['$scope', 'productService', '$stateParams',
  function($scope, productService, $stateParams) {

    $scope.categoryId = 'All Products';

    $scope.products = productService.getProducts();
    $scope.categories = productService.getCategories();

     
    $scope.showProduct = $scope.products[$stateParams.productId];

    console.log("In here");
    for (var key in $stateParams) {
      console.log("Selected product is " + key);
    }  

    $scope.print = function() {
      console.log("State params is " + $stateParams.productId);
    }

  }]);
