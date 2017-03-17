Spa.factory("CategoryService", ["_", function(_) {
  var CategoryService = {};

  var _categories = [];

  CategoryService.makeCategories = function() {
    if (_categories.length === 0) {
      var id = 0;
      for (var i = 0; i < 5; i ++) {
        var newCategory = {
          id: id++,
          name: faker.commerce.department()
        }
        _categories.push(newCategory);
      };
      _categories = _.uniq(_categories);

      console.log('making categories')
    }
    return _categories;
  }

  CategoryService.getCategories = function() {
    return _categories;
  }


  return CategoryService;

}])