define(function(){
	var service={
		resolve:resolve
	};
	return service;

/*
	options:{
		modulename: name of module that need to load
	}
*/
	function resolve(config, options){
		var promise = require("node-promise");
		var def=new promise.defer();
		var moduleUrl=String.format("{0}{1}/index.js", config.moduleUrl, options.moduleName);
		requirejs([moduleUrl], function(moduleInstance){
			def.resolve(moduleInstance);
		});
		return def;
	}
});