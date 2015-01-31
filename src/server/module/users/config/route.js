define(function(){
	var route=getRoutes();
	return route;

	function getRoutes(){
		var routes=[
			{method:"get", url:"/permissions", handler:"server/module/users/handlers/userHandler" },
			{method:"post", url:"/permissions", handler:"server/module/users/handlers/userHandler" }
		];
		return routes;
	}
});