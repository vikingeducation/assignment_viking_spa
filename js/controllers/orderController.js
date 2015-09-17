app.controller("OrderCtrl", ['$scope', 'cartService', function($scope, cartService){
  $scope.formData = {};

  $scope.cart=cartService.listAll();
  $scope.total=cartService.total;
  $scope.generateBilling = function(){
    $scope.formData.billing1 = $scope.formData.billing1 || $scope.formData.street1

    $scope.formData.billing2 = $scope.formData.billing2 || $scope.formData.street2

    $scope.formData.bcity = $scope.formData.bcity || $scope.formData.city
    $scope.formData.bstate = $scope.formData.bstate || $scope.formData.state

    $scope.formData.bzip = $scope.formData.bzip || $scope.formData.zip


  }
  $scope.placeOrder = function(){
    cartService.placeOrder();
  };
}]);
