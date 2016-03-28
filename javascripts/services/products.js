viking.factory('productService', function() {
  var obj = {};
  var currentCategoryID = 1;
  var currentProductID = 0;
  var categories = categories || [];
  var products = products || [];

  obj.createCategory = function() {
    var category = {};
    category.name = faker.commerce.department();
    category.id = currentCategoryID;
    categories.push(category);
    currentCategoryID++;
  };

  obj.createProduct = function(category) {
    var product = {};
    product.price = faker.commerce.price();
    product.name = faker.commerce.productName();
    product.description = faker.lorem.sentence();
    product.categoryid = category.id;
    product.id = currentProductID;
    products.push(product);
    currentProductID++;
  };

  obj.getCategories = function() {
    return categories;
  };

  obj.getProducts = function() {
    return products;
  };

  obj.setupProducts = function() {

    if (categories.length === 0) {
      var allCategory = {
        id: 0,
        name: "All"
      };
      categories = [ allCategory ];

      for(var i = 0; i < 10; i++) {
        obj.createCategory();
      };
    };

    if (products.length === 0) {

      categories.forEach(function(category) {
        for(var i = 0; i < 5; i++) {
          obj.createProduct(category);
        };
      });
    };
  };

  return obj;
})