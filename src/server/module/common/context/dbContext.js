define([
	'server/module/common/models/queryable/iqueryable'
	],function(iqueryableFactory){
	
	var context={
		create: create
	};
	return context;

	function create(schemaOptions){
		if(!schemaOptions){ throw "Schema can not be empty.";}
		schemaOptions.name=schemaOptions.name.toPlural();
		return new Context(schemaOptions);
		function Context(schemaOptions){
			var self=this;
			var contextResolver = GLOBAL.ioc.resolve("IContextResolver");
			self[schemaOptions.name]= contextResolver.resolve(schemaOptions);
			//console.log("Resolver ne",self[schemaOptions.name]);
			return self;
		}
	}
});