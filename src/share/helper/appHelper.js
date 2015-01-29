define([
	"share/config/app",
	"share/config/handlers"
	],function(appConfig, handlers){
	var helper={
		config:config
	};
	return helper;

	function config(app){
		console.log("Inside config the app");
		configViews(app);
		configViewEngine(app)
		configHanders(app, handlers);
		startApp(app);
	}

	function startApp(app){
		var server=app.listen(appConfig.client.port, function(){
			console.log("Waitting for incoming request ...");
		});
	}

	function configHanders(app, handlers){
		handlers.forEach(function(handlerItem){
			console.log(String.format("Configuring '{0}' handler ....", handlerItem.name));
			handlerItem.config(app);
			console.log(String.format("'{0}' handler was configured.", handlerItem.name));

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