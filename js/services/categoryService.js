store.factory('categoryService', function() {

  var _list = [];

  var generateCategory = function() {
    var category = {};
    category.name = faker.hacker.noun();
    _list.push(category);
  };

  var generateCategoryList = function() {
    var categoryMax = Math.floor(Math.random() * 5) + 5;
    for (var i = 0; i < categoryMax; i++) {
      generateCategory();
    }
    return _list;
  };

  var getRandomCategoryId = function() {
    return Math.floor(Math.random() * _list.length);
  };

  var getCategory = function(categoryId) {
    return _list[categoryId];
  };

  var getCategoryList = function() {
    return _list;
  };

  return {
    generateCategoryList: generateCategoryList,
    getRandomCategoryId: getRandomCategoryId,
    getCategory: getCategory,
    getCategoryList: getCategoryList
  };

});
