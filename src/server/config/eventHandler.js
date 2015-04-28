define([
	'server/module/tours/config/eventHandler'
	],function(eventHandler){
	var handlers =[];

	handlers.pushArray(eventHandler);
	
	return handlers;
});