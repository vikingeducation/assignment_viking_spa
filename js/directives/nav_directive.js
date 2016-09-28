app.directive("navBar", ["CartsService", function(CartsService){
  return {
    templateUrl: "js/directives/navBar.html",
    restrict: "E",
    link: function(scope){
      scope.cartTotal = function(){
        return CartsService.cartTotal();
      };
      scope.getItems = function() {
        return CartsService.getCart();
      };
      scope.getItemCount = function() {
        return CartsService.getItemCount();
      };
    }
  };
}]);
