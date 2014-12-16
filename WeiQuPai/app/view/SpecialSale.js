Ext.define('WeiQuPai.view.SpecialSale', {
    extend: 'Ext.DataView',
    xtype: 'specialsale',
    requires: [
        'WeiQuPai.view.UserAuction', 'WeiQuPai.view.KillDetail', 'WeiQuPai.view.ConfirmDialog'
    ],
    config: {
        cls: 'bar bg_ef',
        store: 'SpecialSale',
        loadingText: null,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        plugins: [{
            type: 'wpullrefresh',
            lastUpdatedText: '上次刷新：',
            lastUpdatedDateFormat: 'H点i分',
            loadingText: '加载中...',
            pullText: '下拉刷新',
            releaseText: '释放立即刷新',
            loadedText: '下拉刷新',
            scrollerAutoRefresh: true
        }, {
            type: 'wlistpaging',
        }],
        itemCls: 'killend-item',
        itemTpl: new Ext.XTemplate(
            '<div class="bar_new" style="margin-top:7px;">',
            '<img src="{[this.getPic(values.item.pic_cover)]}" width="140"/>',
            '<div class="pool-info">',
                '<h3>{item.title}</h3>',
                '<p>血战时限：{duration}小时</p>',
                '<p>开杀价：{start_price}</p>',
                '<div class="btn-info">',
                    '<div class="reserve-row">底价：￥<span class="price">{reserve_price}</span></div>',
                    '<div><input type="button" class="btn_create" value="{[this.getButtonText(values)]}"/></div>',
                '</div>',
            '</div>',
            '</div>', {
                getPic: function(pic_cover) {
                    return WeiQuPai.Util.getImagePath(pic_cover, 200);
                },
                getButtonText: function(values){
                    return values.selfId > 0 ? '我的实况' : '创建血战';
                }
            }
        ),
        items: [{
            xtype: 'vtitlebar',
            title: '血战专场',
            cls: 'titlebar1',
            docked: 'top',
            items: [{
                xtype: 'button',
                baseCls: 'arrow_left',
                action: 'back'
            }]
        }],
        param: null
    },

    initialize: function() {
        this.callParent(arguments);

        //添加到顶部的功能按钮
        WeiQuPai.Util.addTopIcon(this);

        this.on('itemtap', this.bindEvent, this);
    },

    updateParam: function(param) {
        this.down('vtitlebar').setTitle(param.title);
        this.loadData();
    },

    loadData: function() {
        var store = this.getStore();
        //加载数据
        this.setLoadingText(null);
        var user = WeiQuPai.Cache.get('currentUser');
        var query = {};
        query['id'] = this.getParam().id;

        if(user) query['token'] = user.token;
        
        this.setLoadingText(null);
        this.getStore().getProxy().setExtraParams(query);
        store.load(function(records, operation, success) {
            if (!success) {
                WeiQuPai.Util.toast('数据加载失败');
                return false;
            }
        }, this);
    },

    bindEvent: function(list, index, dataItem, record, e) {
        if (Ext.get(e.target).findParent('.btn_create')) {
            this.fireEvent('create', list, index, dataItem, record, e);
            return false;
        }
        this.fireEvent('detail', list, index, dataItem, record, e);
    }
})