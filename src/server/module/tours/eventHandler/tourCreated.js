define([
	"server/module/common/context/mongodb/baseContext",
	],function(dbContextFactory){
	var handler={
		onTourCreated:onTourCreated
	};
	return handler;


	function onTourCreated(event){
		var tourForQueryObj = buildTourObjectForCreatedEvent(event);
		GLOBAL.logger.info("Inside onTourCreated, data:{0}", tourForQueryObj);
		var schemaOptions={name:"Tour", type:"Query"};
		var context= dbContextFactory.create(schemaOptions);
		context.Tours.add(tourForQueryObj).then(function(response){
			GLOBAL.logger.info("Tour was synced to query repository, result:{0}", response.toJson());
		});
	}

	function buildTourObjectForCreatedEvent(event){
		var eventJsonData = event.data;
		var tour={
			id:eventJsonData.id,
			name:String.format("{0} - {1}", eventJsonData.locationFrom.name, eventJsonData.locationTo.name), 
			fromLocation:eventJsonData.locationFrom,
			toLocation:eventJsonData.locationTo,
			segments:eventJsonData.segments,
			train:eventJsonData.trainInfo
		};
		return tour;
	}
});