Ext.define('WeiQuPai.store.MyFollow', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'MyFollow',
        autoLoad: false,
        fields: ['id', 'nick', 'avatar', 'sign'],
        pageSize: 100,
        proxy: {
            type: 'ajax',
            url: WeiQuPai.Config.host + '/?r=appv2/follow',
            reader: {
                type: 'json'
            },
            pageParam: false,
            startParam: false,
            limitParam: false
        }
    }
});