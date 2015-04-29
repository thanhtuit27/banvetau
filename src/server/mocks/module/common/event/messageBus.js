
/*change this to the real implementation of messagebus (using RabbitMQ) in production environment*/
define([
	"share/model/collection/hash"
	],function(hashFactory){
	var handlers = hashFactory.create();
	var messageBus = {
		subcribe:subcribe,
		publish:publish
	};
	return messageBus;

	function subcribe(event){
		handlers.add(event.name, event.handler);
	}
	function publish(event){
		var handler = handlers.get(event.name);
		if(!handler){
			GLOBAL.logger.error("{0} handler can not be found.", event.name);
			return;
		}
		handler(event);
	}
});