define([
	"client/module/common/model/enums",
	],function(enums){
	angular.module('common').directive('formRadioOption', function () {
	    return {
	        require:'^formRadioGroup',
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	value:"@",
	        	label:"@",
	        	selected:"@"
	        },
	        controller:function($scope){
	        	$scope.isInlineDisplayMode=isInlineDisplayMode;
	        	$scope.onChange=function(){
	        		$scope.parentController.onChange({id:$scope.value, label:$scope.label});
	        	}
	        },
	        templateUrl: '/client/module/common/directive/formcontrol/formradiooption/view.html',
	        link: function ($scope, element, attrs, formRadioGroupCtrl) {
	        	if(!formRadioGroupCtrl){return;}
	        	$scope.parentController = formRadioGroupCtrl;
	        	$scope.displayMode=formRadioGroupCtrl.getDisplayMode();
	        	
	        }
	    };
	});

	function isInlineDisplayMode(){
		return this.displayMode===enums.displayMode.inline;
	}
});