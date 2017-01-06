// ----------------------------------------
// Category Service
// ----------------------------------------

VikingSPA.factory('categoryService', ['_', function(_) {

  var service = {},
      _categories = SEEDS.categories;

  service.all = function() {
    return _categories;
  };

  service.find = function(id) {
    id = parseInt(id);
    var result;

    _.each(_categories, function(category) {
      if (category.id === id) {
        result = category;
      }
    });

    return result;
  };

  return service;

}]);