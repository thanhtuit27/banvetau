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
		GLOBAL.logger.info("option ins contextResolver.resolve:{0}", options);
		var contextConfig = hash.get(getKey(options));
		GLOBAL.logger.info("contextConfig in contextResolver.resolve:{0}", contextConfig);
		var contextInstance = requirejs(contextConfig.instanceOf);
		GLOBAL.logger.info("resolve in contextResolver,options:{0}, context:{1}",options, contextInstance);
		var context = {
			instance:contextInstance,
			dependOn:contextConfig.dependOn||[]
		};
		return context;
	}

/*
Return the key to identify an context item such as: Tours_query, Tours_command
*/
	function getKey(options){
		//if(String.isNullOrWhiteSpace(options.type)){ return options.name;}

		return String.format("{0}_{1}", options.name, options.type);
	}
});