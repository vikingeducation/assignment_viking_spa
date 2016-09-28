app.factory("productsService", function() {

  var _products = {}
  var _categories = {}

  var getCateogryIds = function() {
    var array = []
    var numberOfCategories = Math.floor(Math.random() * 5)
    for(var i = 0; i < numberOfCategories; i ++) {
      array.push(Math.floor(Math.random() * 5));
    }
    return array;
  }


  var createProducts = function() {
    createCategories();
    for(var i = 0; i < 20; i++) {
      _products[String(i)] = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: "http://www.jamesbondlifestyle.com/sites/default/files/styles/fancybox_popup/public/images/product/cl014-sunspel-grey-shirt.jpg?itok=9JsNP14R",
        description: faker.commerce.color(),
        category: getCateogryIds()
      }
    }
  }



  var getProducts = function() {
    return _products;
  }

  var createCategories = function() {
    for(var i = 0; i < 5; i++) {
      _categories[i] = {
        category_name: faker.commerce.department,
        products_id: []
      }
    }
  }

  return {
    createProducts: createProducts,
    getProducts: getProducts
  }
})

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