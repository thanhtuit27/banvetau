define([
	//"server/module/common/event/eventSubscriberManager"
	"server/module/common/event/messageBusManager"
	],function(messageBus){
	var publisher = {
		publish:publish,
		subcribe:subcribe
	};
	return publisher;
	function subcribe(event){
		messageBus.subcribe(event);
	}
	function publish(event){
		messageBus.publish(event);
	}
});