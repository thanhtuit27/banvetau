define(function(){
	var module={
		start:start
	};
	return module;

	function start(app, request, response){
		response.send("inside index module");
	}
});