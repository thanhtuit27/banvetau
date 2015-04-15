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
			self.data=[];
			self.where = where;
			self.select= select;
			self.firstOrDefault = firstOrDefault;
			self.count = count;
			self.toJson = toJson;
			self.add=add;
			return this;
			function add(dataItem){}
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