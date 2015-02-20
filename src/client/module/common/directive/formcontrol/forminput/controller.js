define(
	[
		"client/module/common/model/enums",
	],function(enums){
	angular.module('common').directive('formInput', function () {
	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	label:'@',
	        	mode:'@',
	        	model:'=',
	        	field:'@'
	        },
	        controller:function($scope){
	        	var vm=this;
	        	angular.extend(vm, $scope);
	        	vm.value= vm.model[vm.field];
	        	vm.isSimpleMode=isSimpleMode;
	        	vm.isAdvanceMode=isAdvanceMode;
	        	vm.onChange=onChange;
	        },
	        controllerAs:"vm",
	        templateUrl: '/client/module/common/directive/formcontrol/forminput/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});

	function onChange(){
		this.model[this.field]=this.value;
		return true;
	}
	function isAdvanceMode(){
		return !this.mode || this.mode===enums.formControlMode.advance;
	}
	function isSimpleMode(){
		return this.mode===enums.formControlMode.simple;
	}
});