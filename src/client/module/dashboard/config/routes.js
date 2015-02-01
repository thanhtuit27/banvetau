define([
		"client/module/dashboard/home/controller"
	],function(){
	var route=getRoutes();
	return route;

	function getRoutes(){
		var routes=[
			{state:"dashboard", url:"/dashboard", template:"/client/module/dashboard/home/view.html", handler:"homeController" }
		];
		return routes;
	}
});