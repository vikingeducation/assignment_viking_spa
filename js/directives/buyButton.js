"use strict";
app.directive('buyBtn', ['cartService', function(cartService){
	return{
		templateUrl: 'js/templates/buyButton.html',
		restrict: "E",
		scope: {
			item: "=",
		},
		link: function(scope){
			scope.addItem = function(){
				if (scope.quantity) {
				cartService.addItem(scope.item, scope.quantity);
				}
				scope.quantity = undefined;
			};
		}
	};
}]);