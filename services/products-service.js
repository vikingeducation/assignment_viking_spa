storeApp.factory("prodServ", ['$window', function($window){
  var _prods = (function(){
    var prods = [];
    for (var i = 0; i < 6; i++){
      var prod = {};
      prod.id = i;
      prod.price = faker.commerce.price();
      prod.name = faker.commerce.productName();
      prod.desc = faker.lorem.sentence();
      prod.cat = Math.floor(Math.random()*3) + 1;
      prods.push(prod);
    };
    return prods;
  })();

  var obj = {};



  obj.all = function(){
    return _prods;
  };

  return obj;

}]);
