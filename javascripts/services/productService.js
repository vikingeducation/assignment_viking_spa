app.factory('productService', function(){

  var service = {};
  service.categories = ['Summer', 'Fall', 'Winter', 'Spring'];

  service.products = [];

  // create Products Data via Faker
  for (var id = 0; id <= 20; id++) {

    var randomCategory = service.categories[Math.floor(Math.random() * service.categories.length)];

     var newProduct = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      id: id,
      description: faker.company.catchPhraseDescriptor(),
      category: randomCategory
    }

    service.products.push( newProduct );
  }



  return service;

});