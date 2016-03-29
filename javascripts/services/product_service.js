vikingStore.factory('productService', function(faker) {

  var PRODUCTS = [];
  var CATEGORIES = [];

  var obj = {};

  obj.getProducts = function() {
    return PRODUCTS;
  }

  obj.getCategories = function() {
    return CATEGORIES;
  }

  var names = [];
  for (var i=0; i < 10; i++) {
   var category = {};
   category.id = i;
   category.name = faker.commerce.department();

   if (names.indexOf(category.name) == -1) {
     names.push(category.name);
     CATEGORIES.push(category);
   } else {
     i --;
   }
  }

  for (var i=0; i < 30; i++) {
   var product = {};
   product.id = i;
   product.name = faker.commerce.productName();
   product.description = faker.lorem.paragraph();
   product.price = faker.commerce.price();
   var index = Math.floor(Math.random() * 10);

   product.category = CATEGORIES[index].id;
   PRODUCTS.push(product);
  }

  return obj;
})
