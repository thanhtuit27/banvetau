define([
	'share/config/app',
	'share/helper/routeHelper'
],function(appConfig, routeHelper){
	var handler={
		name:"serverHandler",
		description:"Handle request API from client app",
		config: config
	};
	return handler;

	function config(app){
		configRoutes(app, appConfig);
		/*app.all('/api/:moduleName',function(req, res){
			var module=req.params;
			requirejs(["./views/config/app.js","./share/service/moduleservice"], function(appConfig, moduleService){
				moduleService.resolve(appConfig, req.params).then(function(moduleInstance){
					moduleInstance.start(app, req, res);
				});
			});
		});*/
		/*app.get('/api/:moduleName/*',function(req, res){
			console.log(String.format("API request:{0}, query:{1}", req.originalUrl, req.params.moduleName));
			res.send("req");
		});
		app.post('/api/*',function(req, res){
			console.log(String.format("API request:{0}, post:{1}", req.originalUrl, req.route.methods));
		});*/
	}
	function configRoutes(app, appConfig){
		appConfig.server.modules.forEach(function(module){
			app.use(module.url, registerModuleRoutes(module));
		});
		//var users=require("./users");
		//app.use("/api/:moduleName", users);
	}

	function registerModuleRoutes(module){
		var router=GLOBAL.router;
		module.routes.forEach(function(route){
			routeHelper.registerRoute(router, route);
		});
		return router;
	}
});