app.factory('productService', function(){

  var service = {};


  var _products = {};
  var _categories = [];


  var _initProducts = function(){
     for(i = 1; i < 70; i++){
       var product = {};
       product.id = i;
       product.price = faker.commerce.price();
       product.name = faker.commerce.productName();
       product.description = faker.lorem.paragraph();
       product.categories = [];

       for(var z = 0; z < 4; z++){
         var index = Math.floor(Math.random() * 29);
         
         product.categories.push(_categories[index].id); 
       };

       _products[i.toString()] = product;

     };
  };


  var _initCategories = function(){
    
    for(i = 1; i < 30; i++){
      var category = {};

      category.id = i;

      category.name = faker.commerce.productAdjective();

      _categories.push(category);
    }

  };

  _initCategories();
  _initProducts();


  service.allProducts = function(){
    return _products;
  };

  service.allCategories = function(){
    return _categories;
  };

  service.find = function(id){
    return _products[id];
  };



  return service;
})