VikingStore.factory('ProductsService', [function(){

	// --------------
	// Private
	// --------------

	var _products = {};

	var _generateProducts = function(){
		for(var i = 0; i < 10; i++){
			_products[i + ""] = {};
			var product = _products[i + ""];
			product.id = i;
			product.imageUrl = "https://images-na.ssl-images-amazon.com/images/I/31dZ6TQwmxL._SX300_.jpg"
			product.price = 200;
			product.name = faker.commerce.productName();
			product.description = faker.lorem.paragraph();
			product.categories = [0];
		};
	};

	// --------------
	// Public
	// --------------

	var ProductsService = {};

	ProductsService.all = function(){
		if ( Object.keys(_products).length === 0 ){
			_generateProducts();
		};
		return _products;
	};

	return ProductsService;

}]);