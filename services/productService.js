// ----------------------------------------
// Product Service
// ----------------------------------------

VikingSPA.factory('productService', ['_', function(_) {

  var service = {},
      _products = SEEDS.products;

  service.all = function() {
    return _products;
  };

  service.find = function(id) {
    id = parseInt(id);
    var result;

    _.each(_products, function(product) {
      if (product.id === id) {
        result = product;
      }
    });

    return result;
  };

  return service;

}]);




