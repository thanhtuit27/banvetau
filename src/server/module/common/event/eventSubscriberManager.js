define([
	"share/model/collection/hash"
	],function(hashFactory){
	var handlers = hashFactory.create();
	var subscriber = {
		getHandlers:getHandlers,
		registerHandlers:registerHandlers
	};
	return subscriber;
	function registerHandlers(handlerItems){
		handlerItems = handlerItems||[];
		handlerItems.forEach(function(handlerItem){
			var handler = handlers.get(handlerItem.name);
			if(!handler){
				handler=[];
			}
			handler.push(handlerItem);
			handlers.update(handlerItem.name, handler);
		});

	}
	function getHandlers(eventName){
		return handlers.get(eventName)||[];
	}
});