app.factory("productsService", ["_", function(_) {

  var _products = {}
  var _categories = {}

  var getCategoryIds = function() {
    var array = []
    var numberOfCategories = Math.ceil(Math.random() * 5)
    for(var i = 0; i < numberOfCategories; i ++) {
      array.push(Math.floor(Math.random() * 5));
    }
    return _.uniq(array);
  }


  var createProducts = function() {
    createCategories();
    for(var i = 0; i < 20; i++) {
      var categories = getCategoryIds()
      _products[String(i)] = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: "http://www.jamesbondlifestyle.com/sites/default/files/styles/fancybox_popup/public/images/product/cl014-sunspel-grey-shirt.jpg?itok=9JsNP14R",
        description: faker.lorem.sentence(),
        long_description: faker.lorem.sentences(),
        categories: categories
      }

      for(var id in categories) {
        _categories[String(id)].products.push(i);
      }
    }
  }

  var getProduct = function(id) {
    return _products[id];
  }

  var getProducts = function() {
    return _products;
  }

  var createCategories = function() {
    for(var i = 0; i < 5; i++) {
      _categories[String(i)] = {
        id: i,
        category_name: faker.commerce.department(),
        products: []
      }
    }
  }

  var getCategories = function() {
    return _categories;
  }

  return {
    createProducts: createProducts,
    getProducts: getProducts,
    getCategories: getCategories,
    getProduct: getProduct
  }
}])

// {
// id : {
//   name:
//   price:
//   image:
//   description:
//    id:
// }
// }

// id : {
  //  category_name: blah,
  //  product_ids: []
//}