app.factory("productService", [ function(){
  var obj = {}
  _categories = [];
  _products = [];
  //_product={name: ,price: ,description: , category: }

  for (var i = 0; i < 10; i++){
    _categories.push(faker.commerce.department());

  }
  for (var i = 0; i < 36; i++){
    var newProduct={name: faker.commerce.productName(),
              price: faker.commerce.price(),
              description: faker.lorem.paragraph(),
              category: _categories[Math.floor(Math.random()*_categories.length)]};
    _products.push(newProduct);
    
  }

  obj.getCategories = function(){
    return _categories;
  }

  obj.getProducts = function(){
    return _products;
  }

  return obj;
}])
