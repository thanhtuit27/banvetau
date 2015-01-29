define(function(){
	var handler={
		name:"loggingHandler",
		description:"For logging",
		config: config
	};
	return handler;

	function config(app){
		app.all('*', function(req, res, next){
			console.log(String.format("Incomming request:'{0}' at {1}", req.originalUrl, new Date()));
			next()
		});
	}
});