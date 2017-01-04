VikingStore.factory('ProductService', function() {

  var _id = 6;
  var _products = [];
  var _categories = [];

  for(i = 0; i < 4; i++) {
    _categories.push({ id: i, name: faker.commerce.department()})
  }

  for(i = 0; i < _id; i++) {
    _products.push( { id: i, name: faker.commerce.productName(),
                      price: faker.commerce.price(),
                      imageUrl: 'images/'+i+'.jpg',
                      category: _categories[_.random(0,4)],
                    });
  }

  // Extend a product to
  // have its own methods
  var _initProduct = function(product) {
    product.update = function(params) {
      this.name = params.name;
      return this;
    };

    product.destroy = function() {
      for (var i = _products.length - 1; i >= 0; i--) {
        if (this.id === _products[i].id) {
          _products.splice(i, 1);
          break;
        }
      }
      return this;
    };

    product.toParams = function() {
      return { name: this.name };
    };
  };

  // Internally initialize
  // hard coded products
  var _init = function() {
    _products.forEach(function(product) {
      _initProduct(product);
    });
  };
  _init();


  // The service object
  var ProductService = {};

  // Get all prProductServiceoducts
  ProductService.all = function() {
    return _products;
  };

  ProductService.allCategories = function() {
    return _categories;
  }

  // Find a product by ID
  ProductService.find = function(id) {
    id = parseInt(id);
    for (var i = 0; i < _products.length; i++) {
      if (id === _products[i].id) {
        return _products[i];
      }
    }
  };

  // Create a product and add
  // methods to it
  ProductService.create = function(params) {
    _id++;
    var product = {
      id: _id,
      name: params.name
    };
    _initProduct(product);
    _products.push(product);
    return product;
  };

  return ProductService;

});