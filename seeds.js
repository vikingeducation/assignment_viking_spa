// ----------------------------------------
// Seeds
// ----------------------------------------

var SEEDS = {
  products: [],
  categories: []
};

_.times(10, function(i) {

  var category = {
    id: i + 1,
    name: faker.commerce.department() + ' ' + i
  };

  SEEDS.categories.push(category);

});

_.times(24, function(i) {

  var product = {
    id: i + 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis velit dicta cupiditate, at libero architecto totam maiores laborum voluptatibus qui vitae minus nihil, iure esse. Possimus eveniet voluptatibus aliquam iste.',
    categoryId: _.sample(SEEDS.categories).id
  };

  SEEDS.products.push(product);

});

