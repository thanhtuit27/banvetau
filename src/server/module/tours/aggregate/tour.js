define([
	"share/helper/guidHelper"
	],function(guidHelper){
	var factory={
		create: create
	};
	return factory;

	function create(baseInfo, locationFrom, locationTo, trainInfo, segments){
		return Aggregate();
		function Aggregate(){
			GLOBAL.logger.info("Aggregate in tourAggregate");
			var context = null;
			var self={};
			self.id=guidHelper.newGuid();
			self.baseInfo = System.extend({}, baseInfo);
			self.locationFrom = System.extend({}, locationFrom);
			self.locationTo = System.extend({}, locationTo);
			self.trainInfo = System.extend({}, trainInfo);
			self.segments=System.extend({}, segments);
			self.toJson = toJson;

			return self;

			function toJson(){
				return {
					id:self.id,
					baseInfo: self.baseInfo,
					locationFrom: self.locationFrom,
					locationTo: self.locationTo,
					trainInfo: self.trainInfo,
					segments:self.segments
				};
			}
		}
	}
});