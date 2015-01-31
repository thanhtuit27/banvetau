define(["share/model/collection/hash"],function (hashFactory) {

    "use strict";
    var registeredItems = hashFactory.create();
    var ioc = {
        resolve: resolve,
        load: load
    };
    return ioc;

    function resolve(type, name) {
        var key = getKey(type, name);
        if (!registeredItems.get(key)) {
            return null;
        }
        var item = registeredItems.get(key);
        if (item.isInstantiated === true) {
            return item.instance;
        }
        item = createInstance(item);
        registeredItems.update(key, item);

        return item.instance;
    }
    /*
    {type, name, instanceOf, creationType: normal, singleton, ....}
    all referenced js file pointed by instanceOf must be loaded before calling to this
    */
    function createInstance(item) {
        var instance = {
            isInstantiated: true,
            instance: require(item.instanceOf)
        };
        return instance;
    }

    function load(iocUrl) {
        var iocConfig = require(iocUrl);
        if (!iocConfig || iocConfig.length <= 0) {
            //defer.resolve(this);
            return;
        }

        for (var index = 0; index < iocConfig.length; index++) {
            var iocConfigItem = iocConfig[index];
            var itemKey = getKey(iocConfigItem.type, iocConfigItem.name);
            registeredItems.add(itemKey, iocConfigItem);
        }
    }

    function getKey(type, name) {
        return String.format("{0}_{1}", type, !name ? "" : name);
    }
});
