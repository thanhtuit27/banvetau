define([
		"server/module/common/db/mongodb/connection"
	],function(connectionFactory){
	var builder={
		getQueryParams:getQueryParams,
		getModel:getModel
	};
	return builder;

	function getModel(schemaDefinition){
		var database=connectionFactory.getDb();
		var schema = database.Schema(schemaDefinition.fields);
		var model;
		if(database.models[schemaDefinition.modelName]){
			model = database.model(schemaDefinition.modelName);
			GLOBAL.logger.info("'{0}' model already exists", schemaDefinition.modelName);
		}else{
			model = database.model(schemaDefinition.modelName, schema);
			GLOBAL.logger.info("'{0}' model was created", schemaDefinition.modelName);
		}
		return model;
	}

	function getQueryParams(options){
		return options;
	}
});