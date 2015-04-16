define(function(){
	var factory={
		create: create
	};
	return factory;

	function create(baseInfo, locationFrom, locationTo, trainInfo){
		return Aggregate(baseInfo, locationFrom, locationTo, trainInfo);
		function Aggregate(baseInfo, locationFrom, locationTo, trainInfo){
			GLOBAL.logger.info("Aggregate in tourAggregate");
			var self={};
			self.baseInfo = System.extend({}, baseInfo);
			self.locationFrom = System.extend({}, locationFrom);
			self.locationTo = System.extend({}, locationTo);
			self.trainInfo = System.extend({}, trainInfo);
			return self;
		}
	}
});