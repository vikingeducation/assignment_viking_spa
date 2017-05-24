app.controller("ShoppingCartCtrl",
  ['$scope', "productService", "shoppingCartService", function($scope,  productService, shoppingCartService ){

    $scope.allItems = shoppingCartService.cart;

    $scope.addItem = function(object, formData){
      shoppingCartService.addItem(object, formData);
    };

    $scope.removeItem = function(keyId){
      shoppingCartService.removeItem(keyId);
    };

    $scope.updateQuantity = function(object, formData){
      shoppingCartService.addItem(object, formData);
      console.log('updateQuantity ran')
    };


    // $scope.cartLength = Object.keys($scope.allItems).length;

    $scope.cartLength = function(object, formData){
      return Object.keys($scope.allItems).length;
    };


}]);
