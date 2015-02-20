define([
	"client/module/common/model/enums"
	], function(enums){
	angular.module('common').directive('formRadioGroup', function () {
	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	displayMode:"@"
	        },
	        controller:function($scope){
	        	this.onChange=onChange;
	        	this.getDisplayMode=getDisplayMode;
	        },
	        templateUrl: '/client/module/common/directive/formcontrol/formradiogroup/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});
	function onChange(item){
		console.log("Onside radio group");
		console.log(item);
	}
	function getDisplayMode(){
		var mode=this.displayMode;
		if(String.isNullOrWhiteSpace(mode)){
			mode=enums.displayMode.inline;
		}
		return mode;
	}
});