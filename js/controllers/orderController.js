app.controller("OrderCtrl", ['$scope', 'cartService', function($scope, cartService){

  $scope.cart=cartService.listAll();
  $scope.total=0;
}]);