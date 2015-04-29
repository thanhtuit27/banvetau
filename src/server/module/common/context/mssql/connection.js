define([
	"share/config/app"
	],function(appConfig){
	var transaction=null;
	var mssqlConnection={
		newTransaction:newTransaction,
		getTransaction:getTransaction
	};
	return mssqlConnection;
	function getTransaction(){
		var def=GLOBAL.ioc.resolve("Promise").create();
		def.resolve(transaction);
		return def;
	}
	function newTransaction(){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.logger.info("Creating new connection ...");
		var connection = new GLOBAL.db.mssql.Connection(appConfig.server.connections.defaultConnectionForCommand, function(err) {
			GLOBAL.logger.info("Creating new transaction ...");
			transaction = new  GLOBAL.db.mssql.Transaction(connection);
			GLOBAL.logger.info("Starting new transaction ...");
			transaction.connection1 = connection;
			transaction.begin(function(errors){
				GLOBAL.logger.info("New transaction was started. errors:{0}", errors);
				def.resolve(transaction);	
			});
		});
		return def;
	}
});