spa.factory("productService", [function(){


  var products = {};
  var categories = [];
  var _id = 0;

  var _initFakeProducts = function(num) {
    for (var i = 0; i < num; i++) {
      var name = faker.commerce.productName();
      var price = faker.commerce.price();
      var description = faker.lorem.paragraph();
      var productCategories = [];
      for (var j = 0; j < categories.length; j++) {
        if (Math.floor(Math.random()*2)) {
          productCategories.push(j.toString());
        }
      }
      var newProduct = new Product(i, name, price, description, productCategories)
      products[newProduct.id.toString()] = newProduct
    }
  }

  var _initFakeCategories = function(num) {
    for (var i = 0; i < num; i++) {
      var category = {}
      category.id = "" + i;
      category.name = faker.commerce.productAdjective();
      categories.push(category)
    }
  }

  function Product(id, name, price, description, categories) {
    this.id = id
    this.name = name
    this.price = price
    this.description = description
    this.categories = categories || []
  }

  _initFakeCategories(5);
  _initFakeProducts(50);

  var getProducts = function() {
    return products;
  }

  var getCategories = function() {
    return categories;
  }

  var findProduct = function(productId) {
    return products[productId];
  }

  return {
    getProducts: getProducts,
    findProduct: findProduct,
    getCategories: getCategories
  }



}]);
