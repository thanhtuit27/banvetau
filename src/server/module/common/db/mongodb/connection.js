define([
	"share/config/app"
	], function(appConfig){
	var database=null;
	var factory={
		getConnection:getConnection,
		getDb:getDb
	};
	return factory;

	function getDb(){
		if(!database){
			connect();
		}
		return database;
	}
	function getConnection(){
		if(!database || !database.connection){
			connect();
		}
		return database.connection;
	}

	function connect(){
		database = GLOBAL.mongodb;
		database.connect(appConfig.server.connections.defaultConnectionForQuery);
	}
});