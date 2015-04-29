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
		var def=GLOBAL.ioc.resolve("Promise").create();
		connect().then(function(db){
			def.resolve(db);
		});
		return def;
	}
	function getConnection(){
		if(!database || !database.connection){
			connect();
		}
		return database.connection;
	}

	function connect(){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.db.mongodb.connect(appConfig.server.connections.defaultConnectionForQuery, function(error, db) {
			if(error){
				GLOBAL.logger.error("Creating the conenction fail, error:{0}", error);
				def.reject(error);
				return;
			}
			GLOBAL.logger.info("the connection to data for querying was created");
			def.resolve(db);
		});
		return def;
	}
});