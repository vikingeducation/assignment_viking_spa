var VikingStore = angular.module('VikingStore', ['ui.router']);

VikingStore.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// set a default state for all non-existent routes
	// this is your "else" state
	$urlRouterProvider.otherwise("/products/index");

	$stateProvider
		.state('products', {
			url: "/products",
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('products.index', {
			url: "/index",
			templateUrl: "js/templates/products/index.html",
			controller: "ProductsController"
		})
		.state('products.show', {
			url: "/:id",
			templateUrl: "js/templates/products/show.html",
			controller: "ProductsController"
		})

	$stateProvider
		.state('cart', {
			url: "/cart",
			templateUrl: "js/templates/cart/cart.html",
			controller: "ProductsController"
		})

}]);