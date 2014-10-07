Ext.define('WeiQuPai.view.KillDetail', {
    extend: 'Ext.Container',
    xtype: 'killdetail',
    requires: ['WeiQuPai.view.UserAuctionComment'],
    config: {
        cls: 'bg_ef detail situation',
        scrollable: 'vertical',
        plugins: [{
            type: 'wpullrefresh',
            lastUpdatedText: '上次刷新：',
            lastUpdatedDateFormat: 'H点i分',
            loadingText: '加载中...',
            pullText: '下拉刷新',
            releaseText: '释放立即刷新',
            loadedText: '下拉刷新',
            refreshFn: 'fetchLastest',
            scrollerAutoRefresh: true
        }],
        items: [{
            xtype: 'vtitlebar',
            title: '血战详情',
            docked: 'top',
            cls: 'titlebar1',
            items: [{
                xtype: 'button',
                baseCls: 'arrow_left',
                action: 'back'
            }]
        }, {
            xtype: 'container',
            itemId: 'auctionInfo',
            tpl: new Ext.XTemplate(
                '<div class="bar_new">',
                '<img src="{[this.getCover(values.item.pic_cover)]}" width="100"/>',
                '<div class="text"><ul>',
                  '<li class="text">{item.title}</li>',
                  '<li style="height:16px"><span class="floatleft">市场价：{item.oprice}</span>',
                     '<span class="floatright">开杀价：{start_price}</span></li>',
                  '<li class="red">底价：{reserve_price}</li>',
                  '<li><input type="button" class="status create" value="创建血战" /></span></li>',
                '</ul></div>',
                '</div>', {
                    getCover: function(pic_cover) {
                        return WeiQuPai.Util.getImagePath(pic_cover, 200);
                    }
                }
            )
        }, {
            xtype: 'disclosureitem',
            title: '查看商品图文详情',
            itemId: 'showItemBtn',
        }, {
            xtype: 'container',
            style: 'margin-top:10px;padding:20px 40px;',
            html: '<img src="resources/images/create_auction_pic.png" style="min-width:100%;max-width:100%"/>',
        }],

        poolId: null,
        poolData: null
    },

    initialize: function() {
        this.callParent(arguments);

        this.on('tap', this.bindContainerEvent, this, {
            element: 'element'
        });

        this.down('#showItemBtn').on('tap', function(){
            this.fireEvent('showitem', this);
        }, this);

    },


    updatePoolId: function(id) {
        this.loadData();
    },

    //下拉刷新, 这里的this是pullRefresh对象
    fetchLastest: function() {
        var me = this;
        this.getList().loadData(function() {
            setTimeout(function() {
                me.setState('loaded');
                me.snapBack();
            }, 100);
        });
    },

    loadData: function(callback) {
        var id = this.getPoolId();
        var user = WeiQuPai.Cache.get('currentUser');
        var url = WeiQuPai.Config.apiUrl + '/?r=appv2/auctionPool/detail&id=' + id;
        if (user) {
            url += '&token=' + user.token;
        }
        var me = this;
        WeiQuPai.Util.get(url, function(rsp) {
            me.setPoolData(rsp);
            me.down('#auctionInfo').setData(rsp);
            Ext.isFunction(callback) && callback();

            //上报统计
            var lastView = WeiQuPai.navigator.getPreviousItem();
            if (lastView.isXType('maincard')) {
                lastView = lastView.getActiveItem();
            }
            var from = lastView.getXTypes().split('/').pop();
            var data = {};
            data.from = from;
            data.page = 'useraution';
            data.pool_id = rsp.id;
            data.item_id = rsp.item_id;
            WeiQuPai.app.statReport(data);
            
            WeiQuPai.FollowTip.showCreateAuction();
        });
    },

    bindContainerEvent: function(e) {
        if (Ext.get(e.target).findParent('.create')) {
            this.fireEvent('create', this);
            return false;
        }
    }
})