define([
		"server/module/users/config/route",
		"server/module/tours/config/module"
	],function(userRoutes, tourModule){
	var modules=getModules();
	return modules;

	function getModules(){
		var modules=[
			{url:"/api/users", routes: userRoutes },
			tourModule
		];
		return modules;
	}
});