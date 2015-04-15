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
		GLOBAL.logger.info("resolve in contextResolver,options:{0}, context:{1}",options, contextInstance);
		return contextInstance;
	}

/*
Return the key to identify an context item such as: Tours_query, Tours_command
*/
	function getKey(options){
		return String.format("{0}_{1}", options.name, options.type);
	}
});