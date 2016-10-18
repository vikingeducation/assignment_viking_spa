storeApp.factory("prodServ", ['$window', function($window){
  var _prods = [];

  var obj = {};

  obj.generate = function(){
    for (var i = 0; i < 6; i++){
      var prod = {};
      prod.id = i;
      prod.price = faker.commerce.price();
      prod.name = faker.commerce.productName();
      prod.desc = faker.lorem.sentence();
      prod.cat = Math.floor(Math.random()*3) + 1;
      _prods.push(prod);
    };
  };

  obj.all = function(){
    return _prods;
  };

  return obj;

}]);
