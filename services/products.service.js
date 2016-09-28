VikingStore.factory('ProductsService', ['_', 'faker', function(_, faker) {

  var _products = {};

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

  for (var i = 1; i <= 6; i++) {
    var product = {};
    product.name = faker.commerce.productName();
    product.id = i;
    product.description = faker.lorem.sentence();
    product.price = faker.commerce.price();
    product.category = Math.ceil(Math.random() * 3);
    _products[i] = product;
  }

}]);