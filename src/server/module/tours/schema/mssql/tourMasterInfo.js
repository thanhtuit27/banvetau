define([
	"share/helper/guidHelper"
	],function(guidHelper){
	var schema = {
		create: create
	};
	return schema;

	function create(tourAggreate){
		return TourMasterInfo(tourAggreate);
		function TourMasterInfo(tourAggreate){
			GLOBAL.logger.info("Creating new master data item from:{0}", tourAggreate)
			var self = {};
			self.id = tourAggreate.id;
			self.name = tourAggreate.baseInfo.name;
			self.locationFromId = tourAggreate.locationFrom.id;
			self.leaveOn = tourAggreate.locationFrom.leaveOn;
			self.locationToId = tourAggreate.locationTo.id;
			self.arriveOn = tourAggreate.locationTo.arriveOn;
			self.trainId = tourAggreate.trainInfo.id;
			self.schema={table:"Tours"};
			return self;
		}
	}
});