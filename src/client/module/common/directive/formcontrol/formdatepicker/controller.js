define(
	[
		"share/helper/modelHelper",
		"client/module/common/model/enums",
	],function(modelHelper, enums){
	angular.module('common').directive('formDatePicker', function () {
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
	        	vm.value= modelHelper.getValue(vm.model, vm.field);
	        	vm.isSimpleMode=isSimpleMode;
	        	vm.isAdvanceMode=isAdvanceMode;
	        	vm.onChange=onChange;
	        },
	        controllerAs:"vm",
	        templateUrl: '/client/module/common/directive/formcontrol/formdatepicker/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});

	function onChange(){
		modelHelper.setValue(this.model, this.field, this.value);
		//this.model[this.field]=this.value;
		return true;
	}
	function isAdvanceMode(){
		return !this.mode || this.mode===enums.formControlMode.advance;
	}
	function isSimpleMode(){
		return this.mode===enums.formControlMode.simple;
	}
});