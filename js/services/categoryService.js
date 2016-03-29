store.factory('categoryService', function() {

  var _list = [];
  var _categoryNames = {};

  var generateCategory = function() {
    var category = {};

    category.name = faker.commerce.productAdjective();
      while(_categoryNames[category.name]){
      category.name = faker.commerce.productAdjective();
    }

    category.id = _list.length + 1;
    _list.push(category);
    _categoryNames[category.name] = true;
  };

  var generateCategoryList = (function() {
    var categoryMax = Math.floor(Math.random() * 5) + 5;
    for (var i = 0; i < categoryMax; i++) {
      generateCategory();
    }
  })();

  var getRandomCategoryId = function() {
    return Math.floor(Math.random() * _list.length) + 1;
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
