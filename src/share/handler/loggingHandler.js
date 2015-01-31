define(function(){
	var handler={
		name:"loggingHandler",
		description:"For logging",
		config: config
	};
	return handler;

	function config(app){
		var logger=GLOBAL.ioc.resolve("ILogger");
		app.all('*', function(req, res, next){
			logger.info("Incomming request:'{0}'", req.originalUrl)
			next()
		});
	}
});