define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/db/mongodb/connection",
	"server/module/common/db/mongodb/builder",
	"server/module/tours/schema/mongodb/tours",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	],function(iqueryableFactory, connectionFactory, builder, toursSchema, responseMessageFactory, enums){
	var queryContext={
		where: where,
		add:add
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;

	function add(tour){
		GLOBAL.logger.info("Beginning of tourQueryContext.add:{0}", tour);
		var def=GLOBAL.ioc.resolve("Promise").create();
		connectionFactory.getDb().then(function(database){
			database.collection("Tours").insert(tour, function(errors, insertedItem){
				GLOBAL.logger.info("tourQueryContext.add:{0}", insertedItem);
				var responseMessage = responseMessageFactory.create();
				handleResponse(insertedItem, errors, responseMessage);
				def.resolve(responseMessage);
			});
			database.close();
		});
		return def;
	}

	function where(options){
		GLOBAL.logger.info("Beginning of tourQueryContext.where, options:{0}", options);
		var def=GLOBAL.ioc.resolve("Promise").create();
		connectionFactory.getDb().then(function(database){
			var query = builder.getQueryParams(options);
			database.collection("Tours").find(query).toArray(function(errors, items){
				GLOBAL.logger.info("tourQueryContext.where, query:{0}, result:{1}", query, items);
				var responseMessage = responseMessageFactory.create();
				handleResponse(items, errors, responseMessage);
				def.resolve(responseMessage);
			});
		});
		return def;
	}
	function handleResponse(items, errors, responseMessage){
		if(errors && errors.length>0){
			responseMessage.addErrors(errors);
			responseMessage.setStatus(enums.http.httpStatus.internalServerError);
			return;
		}
		responseMessage.setData(items);
	}
});
