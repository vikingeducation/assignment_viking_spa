app.controller("ProductsShowCtrl",
  ['$scope', "productService",  "$stateParams", "shoppingCartService", function($scope,  productService,  $stateParams, shoppingCartService ){

    $scope.products = productService.products;
    $scope.productId = $stateParams.productId;
    $scope.product = $scope.products[ $scope.productId ];

    $scope.addItem = function(object, formData){
      shoppingCartService.addItem(object, formData);
      console.log('addItem ran')
    };

}]);
