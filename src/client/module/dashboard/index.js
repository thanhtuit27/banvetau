var dashboard = angular.module('dashboard', ['ui.router','core','common',"kendo.directives"]);
define([
		"client/module/dashboard/config/module", 
		"client/module/dashboard/config/routes",
		"share/locale/vn/dashboard/index",
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
		//var logger=ioc.resolve("ILogger");
		dashboard.config(function($stateProvider, $urlRouterProvider) {
			//$locationProvider.html5Mode(true)
			// For any unmatched url, redirect to /state1
			//$urlRouterProvider.otherwise(moduleConfig.defaultUrl);
		  	/*$stateProvider.state("dashboard", {
		      url: "/dashboard",
		      templateUrl: "/client/module/dashboard/home/view.html",
		      controller: "homeController",
		      controllerAs: 'vm'
		    });
		    $stateProvider.state("dashboard.tours.search", {
		      url: "/dashboard/tours/search",
		      templateUrl: "/client/module/dashboard/searchTour/view.html",
		      controller: "searchTourController",
		      controllerAs: 'vm'
		    });*/
			routes.forEach(function(route){
				//logger.info("Route configuring '{0}'", ruote);
				console.log(route);
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
			window.location.href=String.format("/#{0}?ts={1}",moduleConfig.defaultUrl, new Date().getMilliseconds());
		}, 1000);
		
	}
});