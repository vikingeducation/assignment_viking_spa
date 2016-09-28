app.factory('ProductsService', ['faker', 'CategoriesService', function(faker, CategoriesService) {

  var _products = {};
  var _product_id = 0;
  var ProductsService = {};

  function _seedProduct() {
    var newProduct =
      {
        id: _product_id,
        name: faker.commerce.product(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: faker.commerce.price(),
        stock: faker.random.number()
      };
    CategoriesService.getAll().then(function(data){
        newProduct.category_id =  Math.floor(Math.random()* Object.keys(data).length);
        _products[_product_id.toString()] = newProduct;
        CategoriesService.updateCategoryProducts(newProduct.category_id, newProduct.id);
    });
    _product_id++;
  }

  function _seedProducts(count) {
    for (var i = 0; i < count; i++) {
      _seedProduct();
    }
    return Promise.resolve(_products);
  }

  ProductsService.seed = function() {
    return _seedProducts(5);
  };

  ProductsService.getAll = function(){
    return Promise.resolve(_products);
  };

  return ProductsService;

}]);
