store.factory('categoryService', function() {

  var _categories = {};


  for (var i = 0; i < 3; i ++) {
    _categories[i] = {
      name: faker.commerce.department(),
      id: String(i)
    }
  }


  var returnCategories = function(){
    return _categories
  }

  return {
    get: returnCategories
  }
});
