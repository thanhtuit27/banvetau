define([
	"share/helper/modelHelper",
	"client/module/common/model/enums"
	], function(modelHelper, enums){
	angular.module('common').directive('formRadioGroup', function () {
	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	        	displayMode:"@",
	        	onChanging:"&",
	        	onChanged:"&",
	        	model:"=",
	        	field:"@"
	        },
	        controller:function($scope){
	        	var vm = this;
	        	
	        	angular.extend(vm, $scope);
	        	
	        	vm.selectedItem={};
	        	vm.onChange=onChange;
	        	vm.getDisplayMode=getDisplayMode;
	        	vm.getId=getId;
	        	vm.getSelectedValue=getSelectedValue;
	        	return vm;
	        },
	        templateUrl: '/client/module/common/directive/formcontrol/formradiogroup/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});

	function getSelectedValue(){
		return this.selectedItem.value?this.selectedItem.value:modelHelper.getValue(this.model, this.field);
	}
	function getId(){
		return this.$id;
	}
	function onChange(item){
		if(this.onChanging()){
			this.onChanging()(this.selectedItem, item);
		}

		var oldValue=this.selectedItem;
		this.selectedItem=item;
		modelHelper.setValue(this.model, this.field, this.selectedItem.value);

		if(this.onChanged()){
			this.onChanged()(oldValue, this.selectedItem);
		}
	}
	function getDisplayMode(){
		var mode=this.displayMode;
		if(String.isNullOrWhiteSpace(mode)){
			mode=enums.displayMode.inline;
		}
		return mode;
	}
});