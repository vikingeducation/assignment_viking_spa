VikingStore.filter('filterByCategory', function () {
	return function (products, category) {
		if (category === undefined || category === "") {
			return products;
		}
		var products = _.map(products, function (value) {
			return value;
		});
		return filtered = _.filter(products, function (p) {
			console.log(p.category.id, category);
			return p.category.id === Number(category);
		});
	};
});
