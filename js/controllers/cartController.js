vikingStore.controller('CartCtrl', [
  '$scope', 'cartService', 
  function($scope, cartService){

    $scope.$watch(function(){
      return cartService.size();
    }, function(newSize){
      $scope.cartSize = newSize;
    });

    $scope.$watch(function(){
      return cartService.value();
    }, function(newValue){
      $scope.cartValue = newValue;
    });

    $scope.allItems = cartService.allItems();

    $scope.removeItem = function(item){
      cartService.removeItem(item);
    };

}]);