VikingStore.controller("NavbarCtrl", ["$scope", "shoppingCartsService", function($scope, shoppingCartsService) {

  $scope.numItemsInCart = shoppingCartsService.numItems();
  console.log("HELLO");
  console.log($scope.numItemsInCart)

} ])