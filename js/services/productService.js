app.factory("productService", ['faker', function(faker){
  var obj = {}
  _categories = [];

  for (var i = 0; i < 10; i++){
    _categories.push(faker.commerce.department());
  }

  obj.getCategories = function(){
    return _categories;
  }

  return obj;
}])
