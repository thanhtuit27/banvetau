define([
		"share/handler/staticContentHandler",
		"share/handler/loggingHandler",
		"share/handler/clientHandler",
		"share/handler/serverHandler"
	],function(staticContentHandler, clientHandler, loggingHandler, serverHandler){

	var handlers=[
		staticContentHandler, 
		clientHandler, 
		loggingHandler,
		serverHandler
	];
	
	return handlers;
});