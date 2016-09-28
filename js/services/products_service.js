app.factory('ProductsService', ['faker', function(faker) {

  var _products = {};
  var _product_id = 0;
  var ProductsService = {};

  function _seedProduct() {
    var newProduct = faker.fake(
      "{\
        id: _product_id,\
        name: {{ commerce.product }},\
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',\
        price: {{ commerce.price }},\
        stock: {{ random.number }}\
      }"
    );
    _products[_product_id.toString()] = newProduct;
    _product_id++;
  }

  function _seedProducts(count) {
    for (var i = 0; i < count; i++) {
      _seedProduct();
    }
    return Promise.resolve(_products);
  }

  ProductsService.all = function() {
    return _seedProducts(5);
  };

  return ProductsService;

}]);
