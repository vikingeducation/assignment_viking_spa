clothingStore.factory('categoriesService', [function(){

  var obj = {};
  var _names = [];
  var _categories = [];

  var _getUniqueName = function() {
    var name = faker.commerce.department();
    while (_names.indexOf(name) >= 0) {
      name = faker.commerce.department();
    }
    _names.push(name);
    return name;
  };

  var createCategories = (function() {
    var category = {};
    for (var i=0; i<10; i++) {
      category = {
        id: i,
        name: _getUniqueName()
      };

      _categories.push(category);
    }
  })();

  obj.categories = function(){
    return _categories;
  };

  obj.findCategory = function(id) {
    for (var i=0; i<_categories.length; i++) {
      if (_categories[i].id == id) {
        return _categories[i];
      }
    }
  };

  return obj;

}]);