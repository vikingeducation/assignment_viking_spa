app.factory('productService', function(){

  var service = {};
  var categories = ['Summer', 'Fall', 'Winter', 'Spring'];

  var id = 0;

  service.products = {};


  // create Products Data via Faker
  for (var i = 0; i <= 20; i++) {

    var randomCategory = categories[Math.floor(Math.random() * categories.length)];

    service.products[id] = {
      "name": faker.commerce.productName(),
      "price": faker.commerce.price(),
      "id": id,
      "description": faker.company.catchPhraseDescriptor(),
      "category": randomCategory
    }

    id++;
  }



  return service;

});