define([
		"server/module/users/config/route"
	],function(userRoutes){
	var modules=getModules();
	return modules;

	function getModules(){
		var modules=[
			{url:"/api/users", routes: userRoutes }
		];
		return modules;
	}
});