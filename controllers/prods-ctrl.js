storeApp.controller("ProdsCtrl", ["$stateParams", "catServ", "prodServ", '$window', '$scope', function($stateParams, catServ, prodServ, $window, $scope){

  $scope.prods = prodServ.all();
  $scope.cats = catServ.all();
  $scope.getCategory = function(id){
    catServ.getCategory(id);
  };

  $scope.prodId = $stateParams.id

}])
