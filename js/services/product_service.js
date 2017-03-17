Spa.factory("ProductService", ["CategoryService", "_", function(CategoryService, _) {
  var ProductService = {};

  var _products = [];


  ProductService.makeProducts = function() {
    if (_products.length === 0) {
      var catNum = CategoryService.getCategories().length;
      var id = 0;
      for(var i = 0; i < 20; i++) {
        var newProduct = {
          id: id++,
          photo: faker.image.avatar(), // change to other prop later and modify size on page with css
          price: faker.commerce.price(),
          name: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          categoryID: Math.floor(Math.random() * catNum)
        }
        _products.push(newProduct);    
      }
      _products = _.uniq(_products);

      console.log('making products')    
    }

    return _products;
  }

  ProductService.getProducts = function() {
    return _products;
  }

  return ProductService;

}])