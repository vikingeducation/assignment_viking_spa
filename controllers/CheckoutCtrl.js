VikingStore.controller('CheckoutCtrl', ['$scope', function($scope) {

  $scope.formData = {};

  $scope.formNotEmpty = function(){
    return Object.keys($scope.formData).length > 0;
  };

}]);