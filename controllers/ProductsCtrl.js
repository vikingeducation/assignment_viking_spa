// ----------------------------------------
// ProductsCtrl
// ----------------------------------------


VikingSPA.controller('ProductsCtrl',
  ['_', '$scope', '$stateParams', 'productService', 'categoryService', 'cartService',
  function(_, $scope, $stateParams, productService, categoryService, cartService) {

    $scope.cart = {
      add: cartService.add,
      remove: cartService.remove,
      all: cartService.all
    };

    if ($stateParams.id) {
      $scope.product = productService.find($stateParams.id);
    }

    $scope.products = productService.all();
    $scope.categories = categoryService.all();

    _.map($scope.products, function(product) {
      product.category = categoryService.find(product.categoryId);
    });

  }]);




