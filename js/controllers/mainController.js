clothingStore.controller('MainCtrl', ['$scope',
                            'productsService',
                            'categoriesService',
                            function( $scope,
                                      productsService,
                                      categoriesService){

                              categoriesService.createCategories();
                              $scope.categories = categoriesService.categories;

                              productsService.createProducts();
                              $scope.products = productsService.products;

                              $scope.findCategory = function(id) {
                                return categoriesService.findCategory(id);
                              }
}]);