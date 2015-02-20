define(function(){
	angular.module('dashboard').directive('tourQuickSearch', function () {
	    return {
	        restrict: 'E',
	        scope: {
	        },
	        controller:function($scope){
	        	var vm=this;
	        	vm.from="test data ne";
	        	vm.doSearch=doSearch;
	        },
	        controllerAs:"vm",
	        templateUrl: '/client/module/dashboard/home/directive/tourquicksearch/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	});

	function doSearch(){
		var logger=ioc.resolve("ILogger");
		logger.info(this);
	}
});