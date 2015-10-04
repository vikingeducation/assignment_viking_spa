vikingStore.factory('productService', ['faker', function() {
  var productService;


// Mimic API data response
  productService.getProducts = function() {
    var response = this.products.map( function(product, i) {
      product.category = this.getCategory(product.category_id)
    });
    return response;
  };

  productService.getCategory = function(id) {
    return this.categories.filter( function(category) {
      return (category.id === id);
    })[0];
  };


// Faker functions to seed data
  productService.categories = [];
  for(i = 1; i < 9; i++) {
    var cat = {
      id: i,
      name: faker.commerce.department()
    };
    productService.categories.push(cat);
  };

  productService.products = [];
  for(i = 1; i < 25; i++) {
    var prod = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      category_id: productService.randomCategory()
    };
    productService.products.push(prod);
  };

  productService.randomCategory = function() {
    var i = Math.floor(Math.random()*productService.categories.length);
    return productService.categories[i];
  };

  return productService;
})