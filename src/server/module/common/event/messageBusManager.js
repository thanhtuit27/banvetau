define(function(){
	var bus= null;//GLOBAL.createBusInstance();
	var busManager={
		publish:publish,
		subcribe:subcribe
	};
	return busManager;
	function subcribe(event){
		if(!bus){
			createBus();
		}
		bus.listen(event.name,  function(msg){
			GLOBAL.logger.info("BusManager.subcribe: eventName:{0}, data:{1}", event.name, msg.data);
			event.handler(msg.data);
		});
	}
	function publish(event){
		/*if(!bus){
			createBus();
		}*/
		bus.send(event.name, event);
		GLOBAL.logger.info("BusManager.publish:{0}", event);
	}


	function createBus(){
		GLOBAL.logger.info("Create new Bus instance...");
		bus =GLOBAL.createBusInstance();
	}
});