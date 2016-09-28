app.controller("orderNewCtrl", ["$scope", "shoppingCartService", "orderService", function($scope, shoppingCartService, orderService) {

  $scope.cart = shoppingCartService.listAll();

  $scope.checkOutForm;

}])