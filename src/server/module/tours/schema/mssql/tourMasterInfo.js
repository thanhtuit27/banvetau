define(function(){
	var schema = {
		create: create
	};
	return schema;

	function create(tourAggreate){
		return TourMasterInfo(tourAggreate);
		function TourMasterInfo(tourAggreate){
			var self = this;
			self.name = tourAggreate.baseInfo.name;
			self.id = tourAggreate.baseInfo.id;
			self.locationFromId = tourAggreate.locationFrom.id;
			self.leaveOn = tourAggreate.locationFrom.leaveOn;
			self.locationToId = tourAggreate.locationTo.id;
			self.arriveOn = tourAggreate.locationTo.arriveOn;
			self.trainId = tourAggreate.trainInfo.id;
			return self;
		}
	}
});