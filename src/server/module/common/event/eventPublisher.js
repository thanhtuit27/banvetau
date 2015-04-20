define([
	"server/module/common/event/eventSubscriberManager"
	],function(eventSubscriberManager){
	var publisher = {
		publish:publish
	};
	return publisher;

	function publish(event){
		GLOBAL.logger.info("'{0}' event was published with data {1}", event.name, event.data);
		var eventName = event.name;
		var eventHandlers = eventSubscriberManager.getHandlers(eventName);
		eventHandlers.forEach(function(handler){
			var expectedMethodName = String.format("on{0}", eventName);
			var handlerObj = requirejs(handler.instanceOf);
			if(handlerObj[expectedMethodName]){
				handlerObj[expectedMethodName](event);
			}else{
				handlerObj.handle(event);
			}
		});
	}
});