define(function(){
	var routes=getRoutes();
	return routes;

	function getRoutes(){
		var routes=[
			{method:"get", url:"", handler:"server/module/tours/handlers/tourHandler" },
			{method:"post", url:"", handler:"server/module/tours/handlers/tourHandler" }
		];
		return routes;
	}
});