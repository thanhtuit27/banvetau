define([
	//"server/module/common/event/eventSubscriberManager"
	//"server/module/common/event/messageBusManager"
	],function(){
	//var messageBus ={publish:function(){},subcribe:function(){}};// GLOBAL.ioc.resolve("IMessageBus");
	var messageBus = GLOBAL.ioc.resolve("IMessageBus");
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