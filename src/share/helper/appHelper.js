define([
	"share/config/app",
	"share/config/handlers"
	],function(appConfig, handlers){

	var logger;
	var helper={
		config:config
	};
	return helper;
	

	function config(app){
		logger=GLOBAL.ioc.resolve("ILogger");

		configViews(app);
		logger.info("view Configuration was done ...");
		configViewEngine(app)
		logger.info("Engine Configuration was done ...");
		configHanders(app, handlers);
		logger.info("Handlers Configuration was done ...");
		startApp(app);
		logger.info("The app was started ...");
	}

	function startApp(app){
		var server=app.listen(appConfig.client.port, function(){
			logger.info("Waitting for incoming request ...");
		});
	}

	function configHanders(app, handlers){
		handlers.forEach(function(handlerItem){
			logger.info("Configuring '{0}' handler ....", handlerItem.name);
			handlerItem.config(app);
			logger.info("'{0}' handler was configured.", handlerItem.name);

		});
	}

	function configViewEngine(app){
		var ejs=require("ejs");
		app.engine('html', ejs.renderFile);
	}

	function configViews(app){
		app.set('views', String.format("{0}/{1}", GLOBAL.baseDir, appConfig.client.alias));
		app.set('cache', appConfig.cache);
	}
});