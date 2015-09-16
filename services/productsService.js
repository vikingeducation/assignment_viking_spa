store.factory("products", ["categories", function(categories){

  var obj = {};

  var _products = [];

  var catgs = categories.getAll()

  for (var i = 0; i < 20; i++) {
    var product = {};

    product.id = i;
    product.name = faker.commerce.productName();
    product.categoryId = catgs[Math.floor(Math.random() * catgs.length)].id;
    product.color = faker.commerce.color();
    product.price = faker.commerce.price();
    product.image = faker.image.cats();
    product.description = faker.lorem.sentence();

    _products.push(product);
  };

  obj.getProducts = function () {
    return _products;
  }

  return obj;

}]);