VikingStore.controller('ProductsIndexCtrl',
  ['$scope', 'ProductService', 'ShoppingCartService',
  function($scope, ProductService, ShoppingCartService) {
    $scope.signed_in = false;
    $scope.products = ProductService.all();
    $scope.categories = ProductService.allCategories();
    $scope.addToCart = function(product) {
      ShoppingCartService.addItem(product, 1);
    }
  }]);