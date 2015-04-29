define([
	'share/config/app',
	'share/helper/routeHelper',
],function(appConfig, routeHelper){
	var handler={
		name:"serverHandler",
		description:"Handle request API from client app",
		config: config
	};
	return handler;

	function config(app){
		/*This should be on the top as it defines the common methods that will be used around the app*/
		initGLOBALFunction();
		//configNodePlugins(app);
		configModules(app, appConfig);
	}

	function initGLOBALFunction(){
		console.log("initGlobalFunction", process.env.RABBITMQ_URL);
		GLOBAL.createBusInstance = function(){
			var bus = GLOBAL.require('servicebus').bus({ 
			    url: process.env.RABBITMQ_URL 
			});
			return bus;
		}
	}


	/*function configNodePlugins(app){
		var bodyParser = require('body-parser');
		var multer = require('multer'); 
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(multer());
	}*/
	function configModules(app, appConfig){
		appConfig.server.modules.forEach(function(module){
			app.use(module.url, registerModuleRoutes(module));
			moduleInitialize(module);
		});
	}

	function moduleInitialize(module){
		if(module.init){
			module.init();
		}
	}
	function registerModuleRoutes(module){
		var router=GLOBAL.router;
		module.routes.forEach(function(route){
			routeHelper.registerRoute(router, route);
		});
		return router;
	}
});