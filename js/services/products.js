vikingStore.factory('productsService', ["_", function(_) {

  var _products = {};
  var _categories = {};

  var _populateProducts = function() {
    var products = {};
    for (var i = 0; i < 11; i++) {
      products[i] = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commeerce.price(),
        description: faker.company.catchPhrase()
        categories: _addCategoriesToProducts();
      }
    }
    angular.copy(products, _products)
  };

  var _populateCategories = function() {
    var categories = {};
    for (var i = 0; i < 6; i++) {
      categories[i] = {
        id: i,
        name: faker.commerce.department(),
      }
    }
    angular.copy(categories, _categories)
  };

  var _addCategoriesToProducts = function() {
    return _.sample([1,2,3,4,5], 2);
  };

}]);
