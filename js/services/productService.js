store.factory('productService',
  ['categoryService',
  function(categoryService) {

    var _list = [];

    var generateProduct = function() {
      var product = {};

      product.id = _list.length + 1;
      product.name = faker.commerce.productName();
      product.price = faker.finance.amount();
      product.description = faker.lorem.paragraph();
      product.categoryId = categoryService.getRandomCategoryId();
      _list.push(product);
    };

    var generateProductList = (function() {
      var productMax = Math.floor(Math.random() * 15) + 5;
      for (var i = 0; i < productMax; i++) {
        generateProduct();
      }
    })();

    var getProductList = function() {
      return _list;
    };

    var getProduct = function(productId) {
      return _list[productId - 1];
    };

    return {
      generateProductList: generateProductList,
      getProductList: getProductList,
      getProduct: getProduct
    };

}]);
