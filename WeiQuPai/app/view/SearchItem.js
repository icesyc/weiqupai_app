Ext.define('WeiQuPai.view.SearchItem', {
    extend: 'Ext.DataView',
    xtype: 'searchitem',
    config: {
        cls: 'bg_ef cateogry-item-container',
        store: 'SearchItem',
        loadingText: null,
        plugins: [{
            type: 'wlistpaging',
        }],
        itemCls: 'category-item',
        itemTpl: new Ext.XTemplate(
            '<div class="item">',
            '<div class="pic" style="background-image:url({[WeiQuPai.Util.getImagePath(values.pic_cover, 200)]})"></div>',
            '<div class="title">{title}</div>',
            '</div>'
        ),

        word: '',
    },

    initialize: function() {
        this.callParent(arguments);
        this.on('itemtap', this.showItem, this);
    },

    loadData: function(callback) {
        this.getStore().getProxy().setExtraParam('word', this.getWord());
        var store = this.getStore();
        store.removeAll();
        this.getPlugins()[0].setIsFullyLoaded(false);
        this.getScrollable().getScroller().scrollToTop(false);
        this.setLoadingText(null);
        store.loadPage(1, function(records, operation, success) {
            if (!success) {
                WeiQuPai.Util.toast('数据加载失败');
                return false;
            }
            Ext.isFunction(callback) && callback();
        }, this);
    },

    showItem: function(list, index, dataItem, record, e) {
        WeiQuPai.Util.goItemView(record.get('id'));
    }
})