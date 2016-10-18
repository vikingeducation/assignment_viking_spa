storeApp.directive('prodSquare', function(){
  return {
    templateUrl: "templates/prodsquare.html",
    restrict: "E",
    scope: {
      prod: "=",
      cats: "="
    }
  }
});
