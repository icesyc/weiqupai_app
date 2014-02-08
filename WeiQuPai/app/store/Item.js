Ext.define('WeiQuPai.store.Item', {
	extend: 'Ext.data.Store',
	requires: ['WeiQuPai.model.Item'],
	config:{
		storeId: 'Item',
		autoLoad: false,
		model: 'WeiQuPai.model.Item',
		pageSize: 5,
		proxy: {
			type: 'ajax',
			url: WeiQuPai.Config.host + 'itemlist.json',
			reader: {
				type: 'json',
				rootProperty: 'records'
			},
			startParam: false,
			limitParam: false
		}
	}
});
