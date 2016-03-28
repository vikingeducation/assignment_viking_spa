vikingStore.controller('productCtrl',
  ['$scope', 'productService', '$stateParams', 'cartService',
  function($scope, productService, $stateParams, cartService) {

    $scope.categoryId = 'All Products';

    $scope.products = productService.getProducts();
    $scope.categories = productService.getCategories();
    $scope.showProduct = $scope.products[$stateParams.productId];

    $scope.cartItems = cartService.listAll();

    $scope.addToCart = function(product) {
      cartService.addItem(product, 1);
    }
    $scope.updateQuantity = function(item, quantity) {
      item.quantity = quantity;
    }
    $scope.removeItem = function(id) {
      cartService.removeItem(id);
    }
  }]);
