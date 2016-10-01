var VikingStore = angular.module('VikingStore', ['ui.router', 'ngMaterial']);

VikingStore.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('cart', {
			url: '/cart',
			templateUrl: 'javascript/template/cart.html',
			controller: 'CartCtrl'
		})
		.state('products', {
			url: '/products',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('products.index', {
			url: '',
			templateUrl: 'javascript/template/products/index.html',
			controller: 'ProductsIndexCtrl'
		})
		.state('products.show', {
			url: '/:id',
			templateUrl: 'javascript/template/products/show.html',
			controller: 'ProductShowCtrl',
			resolve: {
				product: function (ProductService, $stateParams) {
					return ProductService.findProduct($stateParams.id);
				}
			}
		})
});

VikingStore.run(function ($rootScope) {
	$rootScope.$on("$stateChangeError", console.log.bind(console));
});
