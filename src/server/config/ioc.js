define(function() {
    var iocItems = [
    	{ type: 'IContextResolver', instanceOf: "server/module/common/context/contextResolver"},
    	{ type: 'IEventPublisher', instanceOf: "server/module/common/event/eventPublisher"}
    ];
    return iocItems;
});
