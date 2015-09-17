app.factory("productService", [ function(){
  var obj = {}
  _categories = [];
  _products = [];
  //_product={name: ,price: ,description: , category: }

  var generateReviews = function(){
    var reviews = [0,0,0,0];
    return reviews.map(function(){ return generateReview() });
  }

  var generateReview = function(){
    var review = {};
    review.author = faker.name.findName();
    review.text = faker.lorem.paragraph();

    return review
  }
  for (var i = 0; i < 15; i++){
    var newCategory = faker.commerce.department();
    if (_categories.indexOf(newCategory) == -1){
      _categories.push(newCategory);
    }
  }

  for (var i = 0; i < 36; i++){
    var newProduct={id: i,
                    name: faker.commerce.productName(),
                    price: faker.commerce.price(),
                    description: faker.lorem.paragraph(),
                    category: _categories[Math.floor(Math.random()*_categories.length)],
                    image: faker.image.technics(),
                    reviews: generateReviews(),
                  };
    _products.push(newProduct);
  }

  obj.getCategories = function(){
    return _categories;
  }

  obj.getProducts = function(){
    return _products;
  }

  return obj;
}])
