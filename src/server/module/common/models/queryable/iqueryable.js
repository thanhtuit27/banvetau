define([
	"share/helper/functionHelper"
	],function(functionHelper){
	var factory={
		create:create
	};
	return factory;

	function create(){
		return new Queryable();
		function Queryable(){
			var self=this;
			self.data=[
				{id:"1", name:"Tour 1"},
				{id:"2", name:"Tour 2"},
				{id:"3", name:"Tour 3"},
				{id:"4", name:"Tour 4"},
				{id:"5", name:"Tour 5"}
			];
			self.where = where;
			self.select= select;
			self.firstOrDefault = firstOrDefault;
			self.count = count;
			self.toJson = toJson;
			return this;

			function toJson(){
				return this.data;
			}
			function where(condition){
				var def=GLOBAL.ioc.resolve("Promise").create();
				def.resolve(this);
				return def;
			}
			function select(condition){
				var def=GLOBAL.ioc.resolve("Promise").create();
				def.resolve(self);
				return def;
			}
			function firstOrDefault(condition){
				var def=GLOBAL.ioc.resolve("Promise").create();
				def.resolve(self);
				return def;
			}
			function count(condition){ 
				var def=GLOBAL.ioc.resolve("Promise").create();
				def.resolve(self);
				return def;
			}
		}
	}
});