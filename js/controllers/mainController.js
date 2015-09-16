clothingStore.controller('MainCtrl', ['$scope',
                            'productsService',
                            function( $scope,
                                      productsService){


  $scope.randomName = faker.name.findName();


}]);