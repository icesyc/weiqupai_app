Ext.define('WeiQuPai.view.ShowUserFeed', {
    extend: 'Ext.DataView',
    xtype: 'showuserfeed',
    config: {
        uid: null,
        store: 'ShowUserFeed',
        loadingText: null,
        disableSelection: true,
        scrollable: null,
        cls: 'bg_ef',

        itemTpl: new Ext.XTemplate(
            '<div class="mydis">',
            '<div class="dis">',
            '{content}',
            '</div>',
            '<tpl if="feed_type==1">',
            '<div class="img"><tpl for="json_data.pic_list"><img src="{[this.getPic(values)]}"/></tpl></div>',
            '</tpl>',
            '<div style="clear:both"></div>',
            '<div class="content">',
            '<div class="left">',
            '<img src="{[WeiQuPai.Util.getAvatar(values.json_data.pic_cover, 140)]}" width="30">',
            '</div>',
            '<div class="right">',
            '{json_data.title}',
            '</div>',
            '<div style="clear:both"></div>',
            '</div>',
            '<div style="clear:both"></div>',
            '<div class="time">',
            '<div class="left">',
            '{ctime}',
            '</div>',
            '<div class="right">',
            '<div class="zan">',
            '{reply_num}',
            '</div>',
            '<div class="bubble">',
            '{zan_num}',
            '</div>',
            '<div style="clear:both"></div>',
            '</div>',
            '<div style="clear:both"></div>',
            '</div>',
            '</div>', {
                getPic: function(pic) {
                    return WeiQuPai.Util.getImagePath(pic, '40');
                }
            }
        )


    },

    initialize: function() {
        // this.onBefore('itemtap', this.bindEvent, this);
        this.callParent(arguments);
        var user = WeiQuPai.Cache.get('currentUser');
        var me = this;
        this.onBefore('itemtap', function(list, index, dataItem, record, e) {
            if (e.target.className == 'content') {
                me.fireEvent('protap', me, index, dataItem, record, e);
                return false;
            }
            if (e.target.className == 'img') {
                me.fireEvent('detailtap', me, index, dataItem, record, e);
                return false;
            }
            if (e.target.className == 'dis') {
                me.fireEvent('detailtap', me, index, dataItem, record, e);
                return false;
            }
            if (e.target.className == 'bubble') {
                me.fireEvent('detailtap1', me, index, dataItem, record, e);
                return false;
            }
        }, this);
    },
    applyUid: function(uid) {
        this.loadData(uid);
        return uid;
    },

    loadData: function(uid) {
        var store = this.getStore();
        store.getProxy().setExtraParam('uid', uid);
        store.load();
    }
});