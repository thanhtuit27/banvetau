define([
		"server/config/contextConfig",
		'share/model/collection/hash'
	], function(contextConfigs,hashFactory){
	var resolver={
		resolve:resolve
	};
	return resolver;

	function resolve(options){
		var hash= hashFactory.create();
		hash.load("key", contextConfigs);
		var contextInstance = requirejs(hash.get(getKey(options)).instanceOf);
		return contextInstance;
	}

/*
Return the key to identify an context item such as: Tours_query, Tours_command
*/
	function getKey(options){
		return String.format("{0}_{1}", options.name, options.type);
	}
});