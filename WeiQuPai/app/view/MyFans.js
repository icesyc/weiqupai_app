Ext.define('WeiQuPai.view.MyFans', {
    extend: 'Ext.DataView',
    xtype: 'myfans',
    config: {
        uid: null,
        loadingText: null,
        disableSelection: true,
        scrollable: true,
        cls: 'bg_ef myfen',
        store: 'MyFans',
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

        itemTpl: new Ext.XTemplate(
            '<div class="myfen">',
            '<div class="img">',
            '<img src="{[WeiQuPai.Util.getAvatar(values.avatar, 140)]}" width="40">',
            '</div>',
            '<div class="name">',
            '<div>{nick}</div>',
            '<div class="des">{sign}</div>',
            '</div>',
            '<input type="button" class="btn" value="移除粉丝" />',
            '<div class="clear"></div>',
            '</div>'
        )
    },

    initialize: function() {
        this.callParent(arguments);
    },

    updateUid: function(uid){
        this.loadData();
    },

    loadData: function() {
        var uid = this.getUid();
        this.setLoadingText(null);
        var store = this.getStore();
        store.getProxy().setExtraParam('uid', uid);
        store.load(function(records, operation, success) {
            if (!success) {
                WeiQuPai.Util.toast('数据加载失败');
            }
        }, this);
    }
})