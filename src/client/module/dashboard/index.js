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
		      controller: route.controller,
		      controllerAs: 'vm'
		    })
		  });		  
		});
	}

	function gotoStartPage(moduleConfig){}
});