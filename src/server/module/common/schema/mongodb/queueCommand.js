define([
	"share/helper/guidHelper"
	],function(guidHelper){
	var factory={
		create: create
	};
	return factory;

	function create(options){
		return new QueueCommand();
		function QueueCommand(){
			var self=this;
			self.action=options.action;
			self.data=options.data;
			self.id=guidHelper.newGuid();
			return this;
		}
	}
});