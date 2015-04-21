define(function(){
	var handler={
		onTourCreated:onTourCreated
	};
	return handler;


	function onTourCreated(event){
		GLOBAL.logger.info("Inside onTourCreated, data:{0}", event.data.toJson());
	}
});