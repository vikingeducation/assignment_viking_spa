app.factory('CategoriesService', ['faker', function(faker) {
  var _category_id = 0;
  var _categories = {};

  var CategoriesService = {};

  function _seedCategory(){
    var newCategory = {
      id: _category_id,
      name: faker.random.word(),
      product_ids: []
    };
    _categories[_category_id.toString()] = newCategory;
    _category_id++;
  }

  function _seedCategories(count){
    for (var i = 0; i < count; i++){
      _seedCategory();
    }
    return Promise.resolve(_categories);
  }

  CategoriesService.seed = function() {
    return _seedCategories(5);
  };

  CategoriesService.getAll = function(){
    return Promise.resolve(_categories);
  };

  CategoriesService.updateCategoryProducts = function(catId, prodId){
    console.log(catId);
    console.log(prodId);
    _categories[catId].product_ids.push(prodId);
  };

  return CategoriesService;
}]);
