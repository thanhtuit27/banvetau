define(function(){
	angular.module('common').directive('panel', function () {
	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	title:'@'
	        },
	        templateUrl: '/client/module/common/directive/formcontrol/panel/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});
});