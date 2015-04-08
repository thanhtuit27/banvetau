define([
	'share/model/queryable/iqueryable'
	],function(iqueryableFactory){
	var context={
		create: create
	};
	return context;

	function create(schema){
		if(String.isNullOrWhiteSpace(schema)){ throw "Schema can not be empty.";}
		schema=schema.toPlural();
		return new Context(schema);
		function Context(){
			var self=this;
			self[schema]=iqueryableFactory.create(schema);

			return self;
		}
	}
});