//---------------
// MainNav
//---------------

VikingStore.directive('mainNav', function(){

	return {
		restrict: "E",
		templateUrl: "/js/templates/shared/main_nav.html",
		scope: {numberOfItemsInCart: "&"}
	};

});