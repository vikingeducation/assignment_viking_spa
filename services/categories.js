store.factory("categories", function(){

  var obj = {};

  var _categories = [];

  for (var i = 0; i < 20; i++) {
    var category = {};

    category.id = i;
    category.name = faker.commerce.department();
    category.description = faker.lorem.sentence();

    _categories.push(category);
  };

  obj.getAll = function () {
    return _categories;
  }

  return obj;

});