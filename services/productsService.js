store.factory("products", function(){

  var obj = {};

  var _products = [];

  for (var i = 0; i < 20; i++) {
    var product = {};

    product.id = i;
    product.name = faker.commerce.productName();
    product.category = faker.commerce.department();
    product.color = faker.commerce.color();
    product.price = faker.commerce.price();
    product.description = faker.lorem.sentence();

    _products.push(product);
  };

  obj.getProducts = function () {
    return _products;
  }

  return obj;

});