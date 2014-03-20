Ext.define('WeiQuPai.view.DeleteButtonLayer', {
	extend: 'Ext.Container',
	xtype: 'deletebuttonlayer',
	config: {
		deleteAction: null,
		scope: null,	
		cls: 'delete-button-layer',
		items: [
			{
				xtype: 'button', 
				action: 'delete',
				text: '删除',
				cls: 'w-button w-button-red w-margin',
			},
			{
				xtype: 'button', 
				action: 'cancel',
				text: '取消',
				cls: 'w-button w-margin',
			}
		]
	},

	initialize: function(){
		this.down('button[action=cancel]').on('tap', this.hide, this);
		this.down('button[action=delete]').on('tap', function(){
			this.getDeleteAction().call(this.getScope() || this);
		}, this);
	}
});