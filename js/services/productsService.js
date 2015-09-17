clothingStore.factory('productsService', [
  'categoriesService',
  function(categoriesService){

  var obj = {};
  var _products = [];

  var createProducts = (function() {
    var product = {};
    var categories = categoriesService.categories();
    for (var i=0; i<50; i++) {
      product = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.lorem.sentences(2),
        imageUrl: "http://www.campbethel.org/uploads/6/2/6/7/6267826/9120222_orig.png",
        category: categories[Math.floor(Math.random()*categories.length)]
      };

      _products.push(product);
    }
  })();

  obj.products = function(){
    return _products;
  };


  obj.findProduct = function(id) {
    for (var i=0; i<_products.length; i++) {
      if (_products[i].id == id) {
        return _products[i];
      }
    }
  };

  return obj;

}]);

