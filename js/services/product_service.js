store.factory('productService',[ 'categoryService', function(categoryService) {

  var _products = {};


  var randomCat = function(){
    var categories = categoryService.get();
    var category_ids = Object.keys(categories);
    var category_id = category_ids[Math.floor(Math.random() * category_ids.length)];
    return categories[category_id]
  }


  for (var i = 0; i < 20; i ++) {
    _products[i] = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      id: i,
      image: "http://fillmurray.com/30" + i + "/400",
      description: faker.lorem.paragraph(),
      category: randomCat()
    }
  }

  var findProduct = function(id){
    return _products[id]
  }

  var returnProducts = function(){
    return _products
  }

  return {
    get: returnProducts,
    find: findProduct
  }
}]);
