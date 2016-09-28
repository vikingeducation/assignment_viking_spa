"use strict";

app.controller('CartIndexCtrl',
	["$scope", "_", "cartService", function($scope, _, cartService){

	$scope.cart = cartService.listAll();

}]);