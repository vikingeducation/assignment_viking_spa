VikingStore.controller("ProductCtrl", ["$scope", "$stateParams","ProductsService", function($scope, $stateParams, ProductsService){
  $scope.products = ProductsService.products();

  $scope.clicky = function(pr){
    console.log($stateParams);
    //console.log(pr);
  }


}]);
