define([
	"server/module/tours/config/route",
	"server/module/tours/config/eventHandler",
	//"server/module/common/event/eventManager"
	],function(routeConfig,eventSubcribers/*, eventManager*/){
	var config={
		url:"/api/tours",
		routes: routeConfig,
		init:init
	};
	return config;

	function init(){
		var eventManager  = GLOBAL.requirejs("server/module/common/event/eventManager");
		eventSubcribers.forEach(function(event){
			var handlerName = String.format("on{0}", event.name);
			var eventParam = {name:event.name, handler: GLOBAL.requirejs(event.instanceOf)[handlerName]};
			eventManager.subcribe(eventParam);
			GLOBAL.logger.info("'{0}' event subcriber was registered...", event.name);
		});
	}
});
