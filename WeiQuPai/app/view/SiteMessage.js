var sitemessagetpl = new Ext.XTemplate(
	'<div class="comment-row">',
	'<p>{content}</p>',
    '<p><span class="time">{time}</span></p>',
	'</div>'
);


Ext.define('WeiQuPai.view.SiteMessage', {
	extend: 'Ext.dataview.List',
	xtype: 'sitemessage',
	config: {
		id: 'sitemessage',
		emtpyText: '没有信息',
		store: 'SiteMessage',
		disableSelection : true,
		itemTpl: sitemessagetpl,
		items: [
			{
        		xtype: 'titlebar',
        		title: '微趣拍动态',
        		docked: 'top'
        	},
			{
				xtype: 'bottombar'
			}
		]
	}, 
	initialize: function(){
		/*var me = this;
		var getStore = Ext.data.StoreManager.lookup('ShowUserInfo');
		getStore.load(function(records, operation, success){
			if(success){
				var html = showuserinfotpl.applyTemplate(getStore.getAt(0).getData());
				me.down('#user-info').setHtml(html);
			}
		});*/
		var message = Ext.data.StoreManager.lookup('SiteMessage');
		message.load();
	}

});
