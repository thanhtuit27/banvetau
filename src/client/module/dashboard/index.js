var dashboard = angular.module('dashboard', ['ui.router','core','common']);
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
		gotoStartPage(moduleConfig);
	}
	function registerRoutes(moduleConfig,  routes){
		dashboard.config(function($stateProvider, $urlRouterProvider) {
			//$locationProvider.html5Mode(true)
			// For any unmatched url, redirect to /state1
			$urlRouterProvider.otherwise(moduleConfig.defaultUrl);
		  
			routes.forEach(function(route){
			  	$stateProvider.state(route.state, {
			      url: route.url,
			      templateUrl: route.template,
			      controller: route.controller,
			      controllerAs: 'vm'
			    })
			  });		  
		});
	}

	function gotoStartPage(moduleConfig){
		setTimeout(function() {
			window.location.href=String.format("/#{0}",moduleConfig.defaultUrl);
		}, 1000);
		
	}
});