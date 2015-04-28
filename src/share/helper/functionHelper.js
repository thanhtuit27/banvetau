define(function(){
	var helper={
		callIfNotNull:callIfNotNull,
		makeSerializeCall:makeSerializeCall
	};
	return helper;


	function makeSerializeCall(params){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var result={};
		if(!Array.any(params)){ def.resolve({}); }
		var paramIndex=0;
		makeCall(params, paramIndex);

		return def;
		function makeCall(params, index){
			var paramItem = params[index];
			paramItem.method(paramItem.params).then(function(response){
				result[paramItem.name] = response.toJson().data;
				if(index < params.length - 1){
					index+=1;
					makeCall(params, index);
				}else{
					def.resolve(result);
				}
			});
		}
	}

	function callIfNotNull(){
		if(!arguments){return;};
		var callback=arguments[0];
		var parmas=arguments.unshift();
		if(!System.isFunction(callback)){return;}
		callback(params);
	}
});