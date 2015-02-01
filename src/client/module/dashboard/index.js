var dashboard = angular.module('dashboard', ['ui.router', 'core']);
define([
		"client/module/dashboard/config/module", 
		"client/module/dashboard/config/routes"
	],function(moduleConfig, routes){
	var module={
		init:init
	};
	return module;

	function init(){
		var logger=ioc.resolve("ILogger");
		logger.info("Insode dashboard module");
		registerRoutes(moduleConfig,  routes);
	}
	function registerRoutes(moduleConfig,  routes){
		dashboard.config(function($stateProvider, $urlRouterProvider) {
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise(moduleConfig.defaultUrl);
		  
		  routes.forEach(function(route){
		  	$stateProvider.state(route.state, {
		      url: route.url,
		      templateUrl: route.template,
		      controller:function(){
		      	this.name="test data";
		      }
		    })
		  });		  
		  /*$stateProvider
		    .state('state1', {
		      url: "/state1",
		      templateUrl: "/client/layout/default/state1.html"
		    })
		    .state('state1.list', {
		      url: "/list",
		      templateUrl: "/client/layout/default/state1.list.html",
		      controller: function($scope) {
		        $scope.items = ["A", "List", "Of", "Items"];
		      }
		    })
		    .state('state2', {
		      url: "/state2",
		      templateUrl: "/client/layout/default/state2.html"
		    })
		    .state('state2.list', {
		      url: "/list",
		      templateUrl: "/client/layout/default/state2.list.html",
		      controller: function($scope) {
		        $scope.things = ["A", "Set", "Of", "Things"];
		      }
		    });*/
		});
	}

	function gotoStartPage(moduleConfig){}
});