clothingStore.factory('categoriesService', [function(){

  var obj = {};
  var _categories = [];

  obj.createCategories = function() {
    var category = {};
    for (var i=0; i<10; i++) {
      category = {
        id: i,
        name: faker.commerce.department()
      };

      _categories.push(category);
    }
  };

  obj.categories = function(){
    return _categories;
  };

  obj.findCategory = function(id) {
    for (var i=0; i<_categories.length; i++) {
      if (_categories[i].id == id) {
        return _categories[i];
      }
    }
  }

  return obj;

}]);