VikingStore.controller("NavbarCtrl", ["$scope", "shoppingCartsService", function($scope, shoppingCartsService) {

  $scope.numItemsInCart = shoppingCartsService.numItems();

} ])