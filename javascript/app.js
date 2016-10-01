var VikingStore = angular.module('VikingStore', ['ui.router', 'ngMaterial']);

VikingStore.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
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
});
