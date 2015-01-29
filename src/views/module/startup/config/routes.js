define([
	"views/module/startup/home/controller"
	], function(homeController){
	var routes= getRoutes();
	return routes;

	function getRoutes(){
		var routes=[
			{url:'/module/startup/home', view:'module/startup/home/view.html', controller: { name:'djkhfkjdhfsdjk'}}
		];
		return routes;
	}
});