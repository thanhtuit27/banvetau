define(function(){
	angular.module('common').directive('shoppingCart', function () {
	    return {
	        restrict: 'E',
	        scope: {
	        },
	        templateUrl: '/client/module/common/directive/shoppingcart/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});
});