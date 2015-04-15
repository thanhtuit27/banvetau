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
		//configNodePlugins(app);
		configRoutes(app, appConfig);
	}
	function configNodePlugins(app){
		var bodyParser = require('body-parser');
		var multer = require('multer'); 
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(multer());
	}
	function configRoutes(app, appConfig){
		appConfig.server.modules.forEach(function(module){
			app.use(module.url, registerModuleRoutes(module));
		});
	}

	function registerModuleRoutes(module){
		var router=GLOBAL.router;
		module.routes.forEach(function(route){
			routeHelper.registerRoute(router, route);
		});
		return router;
	}
});