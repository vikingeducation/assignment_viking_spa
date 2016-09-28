app.directive("navBar", ["CartsService", function(CartsService){
  return {
    templateUrl: "js/directives/navBar.html",
    restrict: "E",
    link: function(scope){
      scope.cartTotal = function(){
        return CartsService.cartTotal();
      };
      scope.getItems = function() {
        console.log(CartsService.getCart());
        return CartsService.getCart();
      };
    }
  };
}]);
