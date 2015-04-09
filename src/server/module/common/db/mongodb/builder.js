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
		var model = database.model(schemaDefinition.modelName, schema);
		return model;
	}

	function getQueryParams(options){
		return options;
	}
});