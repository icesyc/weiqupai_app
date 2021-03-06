Ext.define('WeiQuPai.store.MyMessage', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: false,
        storeId: 'MyMessage',
        model: 'WeiQuPai.model.Message',
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: WeiQuPai.Config.host + '/?r=appv2/message',
            reader: {
                type: 'json'
            },
            startParam: false,
            limitParam: false
        }
    }
});