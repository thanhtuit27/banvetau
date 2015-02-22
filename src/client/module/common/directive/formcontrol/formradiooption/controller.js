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
	        	label:"@"
	        },
	        templateUrl: '/client/module/common/directive/formcontrol/formradiooption/view.html',
	        link: function ($scope, element, attrs, formRadioGroupCtrl) {
	        	if(!formRadioGroupCtrl){return;}
	        	$scope.isSelected= formRadioGroupCtrl.getSelectedValue()===$scope.value;
	        	$scope.parentController = formRadioGroupCtrl;
	        	$scope.displayMode=formRadioGroupCtrl.getDisplayMode();
	        	$scope.id=formRadioGroupCtrl.getId();

	        	$scope.isInlineDisplayMode=isInlineDisplayMode;
	        	$scope.onChange=function(){
	        		formRadioGroupCtrl.onChange({value:$scope.value, label:$scope.label});
	        	}
	        }
	    };
	});
	function isInlineDisplayMode(){
		return this.displayMode===enums.displayMode.inline;
	}
});