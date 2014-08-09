Ext.define('WeiQuPai.view.NoticeToday', {
    extend: 'Ext.DataView',
    xtype: 'noticetoday',
    config: {
        uid: null,
        cls: 'mylike',
        loadingText: null,
        disableSelection: true,
        scrollable: null,
        items: [{
            xtype: 'container',
            itemId: 'notice',
            tpl: new Ext.XTemplate(
                '<div class="yugao"><div class="title">13:00</div></div>',
                '<tpl for=".">',
                '<div class="myProduct">',
                '<img src="{item.pic_cover}" width="100">',
                '</div>',
                '</tpl>',
                '<div style="clear:both"></div>'
            )
        }]
    },

    initialize: function() {
        this.loadData();
        this.down("#notice").on('tap', this.bindEvent, this, {
            element: 'element',
        });
    },

    loadData: function(uid, callback) {
        var person = this.down('#notice');
        var url = WeiQuPai.Config.apiUrl + '/?r=appv2/auctionNotice&day=' + 1;
        var me = this;
        WeiQuPai.Util.get(url, function(rsp) {
            
         //  var aa= me.getStore().setData(rsp);
           console.log(rsp);
           // me.down('#specialList').setData(data.special);
            person.setData(rsp);
            Ext.isFunction(callback) && callback();
        });
    },

    bindEvent: function(e) {
        var me = this;
        // console.log(record + "+" + e + "+" + dataItem);
        if (Ext.get(e.target).findParent('.myProduct')) {
            me.fireEvent('cardtap', me, e);
            return false;
        }
    }
})