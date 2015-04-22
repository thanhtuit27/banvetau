define(function(){
	var factory={
		create: create
	};
	return factory;

	function create(baseInfo, locationFrom, locationTo, trainInfo){
		return Aggregate();
		function Aggregate(){
			GLOBAL.logger.info("Aggregate in tourAggregate");
			var context = null;
			var self={};
			self.baseInfo = System.extend({}, baseInfo);
			self.locationFrom = System.extend({}, locationFrom);
			self.locationTo = System.extend({}, locationTo);
			self.trainInfo = System.extend({}, trainInfo);
			self.segments=[];
			self.constructor = constructor;
			self.toJson = toJson;

			//self.constructor();
			return self;

			function toJson(){
				return {
					baseInfo: self.baseInfo,
					locationFrom: self.locationFrom,
					locationTo: self.locationTo,
					trainInfo: self.trainInfo,
					segments:self.segments
				};
			}
			function constructor(tourContext){
				context = tourContext;
				context.Locations.getById(self.locationFrom.id).then(function(response){
					self.locationFrom = System.extend(self.locationFrom, response.toJson().data);
				});

				context.Locations.getById(self.locationTo.id).then(function(response){
					self.locationTo = System.extend(self.locationTo, response.toJson().data);
				});
				context.Trains.getById(self.trainInfo.id).then(function(response){
					self.trainInfo = System.extend(self.trainInfo, response.toJson().data);
				});

				context.Segments.getByTrainId(self.trainInfo.id).then(function(response){
					self.segments = response.toJson().data;
				});
			}
		}
	}
});