app.factory("productsService", function() {
  var createProducts = function() {
    var products = {}
    for(var i = 0; i < 20; i++) {
      products[String(i)] = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: "http://www.jamesbondlifestyle.com/sites/default/files/styles/fancybox_popup/public/images/product/cl014-sunspel-grey-shirt.jpg?itok=9JsNP14R",
        description: faker.commerce.color()
      }

    }
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