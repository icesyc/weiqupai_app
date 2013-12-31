Ext.define('WeiQuPai.view.ItemList', {
	extend: 'Ext.dataview.List',
	xtype: 'itemlist',
	config:{
		emtpyText: '没有可用的商品',
		store: 'Item',
        itemCls: 'today-item-row',
        disableSelection : true,
        itemTpl: ['<p class="item-img"><img src="' + WeiQuPai.Config.host + '{pic_url}" /></p>',
            '<h2><span class="time">起拍时间11:00</span>{name}</h2>',
            '<p><span class="market-price">市场价 {price}</span> / <span class="price">￥{price}</span></p>'].join(''),
            //'<p>已拍 {sold_num}  关注 {attention}</p>'].join(''),
        items: [{
            xtype: 'indexad',
        	scrollDock: 'top'
        }]
	}
});
