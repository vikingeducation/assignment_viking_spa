store.factory('ProductsService', function() {

    var ProductsService = {};
    var products = [];  // private var

    ProductsService.getCategories = function() {
        var cats = [];
        for (var i = 0; i < 5; i++) {
            var category = {
                id: i,
                name: faker.commerce.department()
            };
            cats.push(category);
        }
        return cats;
    };

    ProductsService.getProducts = function() {
        for (var i = 0; i < 100; i++) {
            var product = {
                id: i,
                name: faker.commerce.productName(),
                categoryId: Math.floor(Math.random() * 5),
                long_description: faker.commerce.productAdjective(),
                price: faker.commerce.price()
            };
            products.push(product);
        }
        return products;
    };

    ProductsService.getProduct = function(id) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
          return products[i];
        }
      }
    }

    return ProductsService;

});
