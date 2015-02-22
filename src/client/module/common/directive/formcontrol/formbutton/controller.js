define(
	[
		"client/module/common/model/enums",
	],function(enums){
	angular.module('common').directive('formButton', function () {
	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	label:'@',
	        	onClick:"&",
	        	type:"@"
	        },
	        controller:function($scope){
	        	var vm=this;
	        	angular.extend(vm, $scope);
	        	vm.cls="btn-primary";
	        },
	        controllerAs:"vm",
	        templateUrl: '/client/module/common/directive/formcontrol/formbutton/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});
});