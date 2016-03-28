store.factory('ProductsService', function() {

    var products = {};
    // var faker = require('faker')

    products.getCategories = function() {
        var cats = [];
        for (var i = 0; i < 20; i++) {
            var category = {
                id: i,
                name: faker.commerce.department()
            };
            cats.push(category);
        }
        return cats;
    };

    products.getProducts = function() {
        var prods = [];
        for (var i = 0; i < 100; i++) {
            var product = {
                id: i,
                name: faker.commerce.productName(),
                category: Math.floor(Math.random() * 20),
                long_description: faker.commerce.productAdjective(),
                price: faker.commerce.price()
            };
            prods.push(product);
        }
        return prods;
    };

    return products;

});
