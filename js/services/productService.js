vikingStore.factory('productService', ['$q', function($q){

  var _categories = [];
  var _products = [];

  var _fakeCategories = function(){
    return new Promise(
      function(resolve){        
        var testArr = [];
        var id = 1;

        while(testArr.length < 15){
          var tryCat = faker.commerce.department();
          if ( !(testArr.includes(tryCat)) ){
            testArr.push(tryCat);
            _categories.push({id: id, name: tryCat});
            id++;
          }
        }

        resolve(_categories);
      }     
    );
  };

  var _fakeProducts = function(){
    var testArr = [];
    var id = 1;

    while(testArr.length < 75){
      var tryProd = faker.commerce.productName();
      if ( !(testArr.includes(tryProd)) ){
        testArr.push(tryProd);
        _products.push({
          id: id, 
          name: tryProd,
          price: faker.commerce.price(),
          category: _categories[Math.floor(Math.random()*_categories.length)],
          desc: faker.lorem.sentence()
        });
        id++;
      }
    }

    return _products;
  };

  // allCategories either returns fake data or generate 
  // the data and return a Promise.  Products depends on Categories
  // already being created.  
  var allProducts = function(){
    if (_products.length > 0) {
      return _products;
    } else if ( _categories.length > 0 ){
      return _fakeProducts();
    } else {
      return _fakeCategories().then(function(){
        return _fakeProducts();
      });
    }
  };

  var allCategories = function(){
    if (_categories.length > 0){
      return _categories;
    } else {
      return _fakeCategories();
    }
  };

  var getProduct = function(id){
    return _products.filter(function(prod){
      return prod.id == id;
    })[0];
  };

  return {
    allCategories: allCategories,
    allProducts: allProducts,
    getProduct: getProduct
  };
}]);