clothingStore.factory('productsService', [
  'categoriesService', 
  function(categoriesService){

  var obj = {};
  var _products = [];

  obj.createProducts = function() {
    var product = {}
    for (var i=0; i<50; i++) {
      product = {
        id: i,
        name: faker.productName,
        price: faker.price,
        description: faker.lorem.sentences(2),
        category: categoriesService.categories[Math.floor(Math.rand()*15)]
      }

      _products.push(product);
    }
  };

  obj.products = function(){
    return _products;
  }

  return obj;

}]);

