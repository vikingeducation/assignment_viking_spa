VikingStore.controller('ProductsIndexCtrl',
  ['$scope', 'ProductService',
  function($scope, ProductService) {

    $scope.products = ProductService.all();
    $scope.categories = ProductService.allCategories();

  }]);