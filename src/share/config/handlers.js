define([
		"share/handler/staticContentHandler",
		"share/handler/clientHandler",
		"share/handler/loggingHandler"
	],function(staticContentHandler, clientHandler, loggingHandler){

	var handlers=[
		staticContentHandler, 
		clientHandler, 
		loggingHandler
	];
	
	return handlers;
});