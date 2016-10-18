storeApp.controller("ProdsCtrl", ["catServ", "prodServ", '$window', '$scope', function(catServ, prodServ, $window, $scope){
  prodServ.generate();
  $scope.prods = prodServ.all();
  $scope.cats = catServ.all();
  $scope.getCategory = function(id){
    catServ.getCategory(id);
  };

}])
