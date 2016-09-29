VikingStore.factory('ProductsService', [function(){

	// --------------
	// Private
	// --------------

	var _products = {
		"0": {
			id: 0,
			name: "Silent Night",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		},
		"1": {
			id: 1,
			name: "Dainty Daisy",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		},
		"2": {
			id: 2,
			name: "Double Trouble",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		},
		"3": {
			id: 3,
			name: "Whispering Wind",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		},
		"4": {
			id: 4,
			name: "Cunning Cutter",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		},
		"5": {
			id: 5,
			name: "Kingmaker",
			price: 200,
			picture_url: "https://s-media-cache-ak0.pinimg.com/originals/2a/6d/22/2a6d22d257d9cdb3869e979d1ce8ffe2.jpg"
		}
	};

	// --------------
	// Public
	// --------------

	var ProductsService = {};

	ProductsService.all = function(){
		return _products;
	};

	return ProductsService;

}]);