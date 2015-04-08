define(function(){
	var helper={
		callIfNotNull:callIfNotNull
	};
	return helper;


	function callIfNotNull(){
		if(!arguments){return;};
		var callback=arguments[0];
		var parmas=arguments.unshift();
		if(!System.isFunction(callback)){return;}
		callback(params);
	}
});