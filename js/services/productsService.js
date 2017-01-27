VikingStore.factory("ProductsService", function ($http) {
  var ProductsService = {};

  ProductsService.products = function () {
    var _products = [];

    for(var i = 0; i < 10; i++){
      _products.push({
        id: i+1,
        name: faker.commerce.productName(),
        product: faker.commerce.product(),
        price: faker.commerce.price(),
        company: faker.company.companyName(),
        description: faker.lorem.paragraphs()
      });
    }

    return _products;
  };


  return ProductsService;
});
