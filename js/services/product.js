vikingStore.factory('productService', ['$q', function($q){

  var _categories = {};
  var _products = {};

  var _fakeCategories = function(){
    return $q(function(resolve){
      var testArr = [];
      var catArr = [];
      var id = 1;

      while(testArr.length < 15){
        var tryCat = faker.commerce.department();
        if ( !(testArr.includes(tryCat)) ){
          testArr.push(tryCat);
          catArr.push({id: id, name: tryCat});
          id++;
        }
      }

      resolve(catArr);
    });
  };

  var _fakeProducts = function(){
    return $q(function(resolve){
      var testArr = [];
      var prodArr = [];
      var id = 1;

      while(testArr.length < 75){
        var tryProd = faker.commerce.productName();
        if ( !(testArr.includes(tryProd)) ){
          testArr.push(tryProd);
          prodArr.push({
            id: id, 
            name: tryProd,
            price: faker.commerce.price(),
            category: _categories[Math.floor(Math.random()*_categories.length)],
            desc: faker.lorem.sentence()
          });
          id++;
        }
      }

      resolve(prodArr);
    });
  };

  var allProducts = function(){
    return _products;
  };

  var allCategories = function(){
    return _categories;
  };

  var init = function(){
    // have to use $q here because I want to wait for categories to be built
    // before creating fake products
    return $q(function(resolve){
      _fakeCategories().then(function(data){
        _categories = data;
        _fakeProducts().then(function(data){
          _products = data;
        }).then(function(){
          resolve('finished init');
        });
      });
    });

  };

  return {
    init: init,
    allCategories: allCategories,
    allProducts: allProducts
  };
}]);