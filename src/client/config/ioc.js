define([
		"share/helper/logging/defaultlogger",
		"share/helper/storage/sessionLocalStore"
	], function() {
    var iocItems = [
    	{ type: 'ILogger', name:"Default", instanceOf: "share/helper/logging/defaultlogger"},
    	{ type: 'ILocalStore', instanceOf: "share/helper/storage/sessionLocalStore"}
    ];
    return iocItems;
});
