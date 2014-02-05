Ext.define('WeiQuPai.view.My', {
	extend: 'Ext.Container',
	xtype: 'my',
	requires: [
		'WeiQuPai.view.IconButton', 'WeiQuPai.view.MyFriend', 'WeiQuPai.view.Setting', 'WeiQuPai.view.MyProp', 'WeiQuPai.view.MyCoupon',
		'WeiQuPai.view.MyAccount', 'WeiQuPai.view.MyConsignee'
	],

	config: {
		scrollable: true,
		items:[
			{
				xtype: 'titlebar',
				title: '我的',
				docked: 'top'
			},
			{
				xtype: 'disclosureitem',
				title: {
					xtype:'container',
					itemId: 'myInfo',
					cls: 'w-myinfo',
					tpl: '<img src="{avatar}"/><h2>{nick}</h2><p>{sign}</p>'
				}
			},
			{
				xtype: 'container',
				layout: 'hbox',
				items:[
					{
						xtype: 'iconbutton',
						icon: 'friend',
						text: '我的好友',
						action: 'friend'
					},
					{
						xtype: 'iconbutton',
						icon: 'account',
						text: '帐号绑定',
						action: 'account'
					}
				]
			},
			{
				xtype: 'container',
				layout: 'hbox',
				items:[
					{
						xtype: 'iconbutton',
						icon: 'consignee',
						text: '收货地址',
						action: 'consignee'
					},
					{
						xtype: 'iconbutton',
						icon: 'prop',
						text: '我的道具',
						action: 'prop'
					},
					{
						xtype: 'iconbutton',
						icon: 'coupon',
						text: '我的拍券',
						action: 'coupon'
					}
				]
			},
			{
				xtype: 'container',
				layout: 'hbox',
				items:[
					{
						xtype: 'iconbutton',
						icon: 'setting',
						text: '设置',
						action: 'setting'
					}
				]
			}
		],

		listeners: {
			'activate': 'loadData'
		}
	},

	loadData: function(){
        if(!WeiQuPai.Util.isLogin()){
        	Ext.each(this.getInnerItems(), function(cmp){
        		cmp.hide();
        	});
            !this.down('logintip') && this.add(Ext.create('WeiQuPai.view.LoginTip'));
            return false;
        }
        var loginTip = this.down('logintip');
        loginTip && this.remove(loginTip)
        this.down('#myInfo').setData(WeiQuPai.Cache.get('currentUser'));;
		Ext.each(this.getInnerItems(), function(cmp){
    		cmp.show();
    	});        
    }
});
