vikingStore.factory('productsService', ["_", function(_) {

  var _products = [];
  var _categories = {};

  var _populateProducts = function() {
    var products = [];
    for (var i = 0; i < 11; i++) {
      products.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.company.catchPhrase(),
        categories: _addCategoriesToProducts(),
        imageUrl: faker.image.image()
      });
    }
    return angular.copy(products, _products)
  };

  var _populateCategories = function() {
    var categories = {};
    for (var i = 0; i < 6; i++) {
      categories[i] = {
        id: i,
        name: faker.commerce.department(),
      }
    }
    return angular.copy(categories, _categories)
  };

  var _addCategoriesToProducts = function() {
    return _.sample([1,2,3,4,5,6], 2);
  };

  var getProducts = function(){
    if (_.isEmpty(_products)) {
      return _populateProducts();
    } else {
      return _products;
    }
  };

  var getCategories = function() {
    if (_.isEmpty(_categories)) {
      return _populateCategories();
    } else {
      return _categories;
    }
  };

  var find = function(id) {
     return _products[id];
  }

  return {
    getProducts: getProducts,
    getCategories: getCategories,
    find: find
  }

}]);
