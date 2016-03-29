store.controller('ProductsShowCtrl', ['$scope', 'product', 'CartService', function($scope, product, CartService) {


  $scope.product = product;

  $scope.addToCart = function(formIsValid, product, quantity) {
    if (formIsValid) {
      console.log("you clicked it!")
      CartService.addToCart(product, quantity)
    }
  }

}]);
