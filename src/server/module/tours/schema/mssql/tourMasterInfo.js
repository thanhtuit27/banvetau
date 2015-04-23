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
			self.name = tourAggreate.baseInfo.name;
			self.id = tourAggreate.baseInfo.id;
			if(String.isNullOrWhiteSpace(self.id)){
				self.id=guidHelper.newGuid();
			}
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