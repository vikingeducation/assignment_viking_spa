app.factory("productService", [ function(){
  var obj = {}
  _categories = [];
  _products = [];
  //_product={name: ,price: ,description: , category: }

  for (var i = 0; i < 15; i++){
    var newCategory = faker.commerce.department();
    if (_categories.indexOf(newCategory) == -1){
      _categories.push(newCategory);
    }
  }

  for (var i = 0; i < 36; i++){
    var newProduct={id: i,
              name: faker.commerce.productName(),
              price: faker.commerce.price(),
              description: faker.lorem.paragraph(),
              category: _categories[Math.floor(Math.random()*_categories.length)],
              image: faker.image.technics()};
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
