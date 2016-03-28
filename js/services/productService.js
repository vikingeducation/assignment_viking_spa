store.factory('productService',
  ['categoryService',
  function(categoryService) {

    var _list = [];

    var generateProduct = function() {
      var product = {};

      product.id = faker.random.number();
      product.name = faker.hacker.noun();
      product.price = faker.finance.amount();
      product.description = faker.lorem.paragraph();
      product.categoryId = categoryService.getRandomCategoryId();
    };

    var generateProductList = function() {
      var productMax = Math.floor(Math.random() * 95) + 5;
      for (var i = 0; i < categoryMax; i++) {
        generateProduct();
      }
    };

    var getProductList = function() {
      return _list;
    };

    return {
      generateProductList: generateProductList,
      getProductList: getProductList
    };

}]);
