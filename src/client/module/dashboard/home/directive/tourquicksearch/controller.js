define([
	],function(){
	angular.module('dashboard').directive('tourQuickSearch', ["$state", function ($state) {
	    return {
	        restrict: 'E',
	        scope: {
	        	doSearch:"&",
	        	model:"="
	        },
	        controller:function($scope){
	        	var vm=this;
	        	vm.model= $scope.model||{};

	        	
	        	vm.doSearch=$scope.doSearch() || doSearch;
	        },
	        controllerAs:"vm",
	        templateUrl: '/client/module/dashboard/home/directive/tourquicksearch/view.html',
	        link: function ($scope, element, attrs) {
	        }
	    };
	    function doSearch(model){
			var localStore = ioc.resolve("ILocalStore");
			localStore.set("tourSearch", model);
			$state.go("search");

		}
	}]);
	
});