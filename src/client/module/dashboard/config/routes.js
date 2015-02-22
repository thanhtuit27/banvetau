define([
		"client/module/dashboard/home/controller",
		"client/module/dashboard/searchTour/controller"
	],function(){
	var route=getRoutes();
	return route;

	function getRoutes(){
		var routes=[
			{state:"dashboard", url:"/dashboard", template:"/client/module/dashboard/home/view.html", controller:"homeController" },
			{state:"search", url:"/dashboard/tours/search", template:"/client/module/dashboard/searchTour/view.html", controller:"searchTourController" },
		];
		return routes;
	}
});