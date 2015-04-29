define(function() {
    var iocItems = [
    	{ type: 'ILogger', instanceOf: "share/helper/logging/fileLogger", params:{ filePath:"server\\logs\\log.txt"} },
    	{ type: 'IContextResolver', instanceOf: "server/module/common/context/contextResolver"},
    	{ type: 'IMessageBus', instanceOf: "server/mocks/module/common/event/messageBus"},
    ];
    return iocItems;
});
