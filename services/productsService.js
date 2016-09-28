VikingStore.factory('productsService', ['_', 'faker', function(_, faker) {

  var _products = {};

  for (var i = 1; i <= 6; i++) {
    var product = {};
    product.name = faker.commerce.productName();
    product.id = i;
    product.description = faker.lorem.sentence();
    product.price = faker.commerce.price();
    product.categoryId = Math.ceil(Math.random() * 3);
    product.image = faker.image.abstract();
    _products[i] = product;
  }

  var _categories = {
    '1': {
      'id': 1,
      'name': 'Kitchenware'
    },
    '2': {
      'id': 2,
      'name': 'Entertainment'
    },
    '3': {
      'id': 3,
      'name': 'Seafood and Poultry'
    },
  };

  var allProducts = function() {
    return _products
  };

  var allCategories = function() {
    return _categories
  };

  var getProduct = function(productId) {
    return _products[String(productId)]
  }

  return {
    allProducts: allProducts,
    allCategories: allCategories,
    getProduct: getProduct
  }

}]);