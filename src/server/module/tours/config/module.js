define([
	"server/module/tours/config/route"
	],function(routeConfig){
	var config={
		url:"/api/tours",
		routes: routeConfig
	};
	return config;
});