Ext.define('WeiQuPai.view.ShowUserLike', {
    extend: 'Ext.DataView',
    xtype: 'showuserlike',
    config: {
        uid: null,
        cls: 'mylike',
        store: 'ShowUserLike',
        loadingText: null,
        disableSelection: true,
        scrollable: null,
        itemTpl: new Ext.XTemplate(
            '<div class="myProduct">',
            '<div class="img">',
            '<img src="{[WeiQuPai.Util.getImagePath(values.pic_cover, 200)]}" width="100">',
            '</div>',
            '</div>'
        )
    },

    initialize: function() {
        this.callParent(arguments);
        this.onBefore('itemtap', this.bindEvent, this);
        this.msgbox = WeiQuPai.Util.msgbox();
        this.add(this.msgbox);
    },

    applyUid: function(uid) {
        this.loadData(uid);
        return uid;
    },

    loadData: function(uid) {
        var store = this.getStore();
        this.setLoadingText(null);
        store.getProxy().setExtraParam('uid', uid);
        store.load(function(records, operation, success) {
            if (!success) {
                WeiQuPai.Util.toast('数据加载失败');
            }
            if (records.length == 0) {
                this.msgbox.show();
            }
        }, this);
    },

    bindEvent: function(list, index, dataItem, record, e) {
        var me = this;
        if (e.target.className == 'img') {
            me.fireEvent('liketap', me, index, dataItem, record, e);
            return false;
        }
    }
})