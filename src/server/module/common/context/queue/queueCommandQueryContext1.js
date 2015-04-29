define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/db/mongodb/connection",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	],function(iqueryableFactory, connectionFactory, responseMessageFactory, enums){
	var queryContext={
		save:save
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;


	function save(commandObj){
		GLOBAL.logger.info("Beginning of queueCommandQueryContext.add:{0}", commandObj);
		var def=GLOBAL.ioc.resolve("Promise").create();
		connectionFactory.getDb().then(function(database){
			database.collection("QueueCommands").insert(commandObj, function(errors, insertedItem){
				GLOBAL.logger.info("queueCommandQueryContext.save, errors:{0}",errors);
				var responseMessage = responseMessageFactory.create();
				handleResponse({id:commandObj.id}, errors, responseMessage);
				def.resolve(responseMessage);
				database.close();
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