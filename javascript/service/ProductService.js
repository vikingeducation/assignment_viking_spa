VikingStore.factory('ProductService', ['$http', function () {
	// private
	var _categories = {};
	var _products = {};

	// Public
	var ProductService = {};

	ProductService.allCategories = function () {
		for (var i = 1; i < 6; i++) {
			var category = {};
			category.id = i;
			category.name = faker.commerce.department();
			_categories[i] = category;
		};
		console.log(_categories);
		return _categories;
	};

	ProductService.allProducts = function () {
		for (var i = 1; i < 21; i++) {
			var product = {};
			product.id = i;
			product.name = faker.commerce.productName();
			product.price = faker.commerce.price();
			product.description = faker.lorem.paragraph();
			product.category = _categories[Math.floor(Math.random() * 5 + 1)];
			_products[i] = product;
		};
		console.log(_products);
		return _products;
	};

	return ProductService;
}]);
