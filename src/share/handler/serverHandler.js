define([
	'share/config/app',
	'share/helper/routeHelper',
	'server/module/common/event/eventSubscriberManager',
	'server/config/eventHandler'
],function(appConfig, routeHelper, subscriberManager, eventHandlers){
	var handler={
		name:"serverHandler",
		description:"Handle request API from client app",
		config: config
	};
	return handler;

	function config(app){
		//configNodePlugins(app);
		configRoutes(app, appConfig);
		configSubscriber();
	}

	function configSubscriber(){
		subscriberManager.registerHandlers(eventHandlers);
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