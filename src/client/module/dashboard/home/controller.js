define([
		"client/module/dashboard/home/directive/tourquicksearch/controller",
		//"client/module/dashboard/home/directive/shoppingcart/controller"
	],function(){
	angular.module("dashboard").controller('homeController', Controller);

	Controller.$inject=['$scope'];
	
	function Controller($scope){
		var vm=this;
		vm.name="name fo homepage controller ne";
	 }
});