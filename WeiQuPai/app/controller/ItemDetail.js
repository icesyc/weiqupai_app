Ext.define('WeiQuPai.controller.ItemDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'main',
            textList : 'itemdetailtextlist',
            pai: 'button[action=order]',
            commentBtn: 'button[action=comment]',
            commentList: 'itemdetail'
        },
        control: {
           textList : {
                itemtap: 'showDetail'
           },
           pai: {
                tap: 'showOrderView'
           },
           commentBtn: {
                tap: WeiQuPai.Util.showCommentForm
           },
           commentList: {
                avatartap: 'doAvatarTap',
                uptap: 'doUpTap',
                commenttap: 'doCommentTap'
           },
           'commentform': {
                publishComment: 'doPublishComment'
           }
        }
    },
    
    showDetail: function(list, index, dataItem, record, e){
        var detailView = {
            xtype: record.getId()
        };
        this.getMain().push(detailView);
    },

    showOrderView: function(){
        var payView = {
            xtype: 'order'
        }
        this.getMain().push(payView);
    },

    doPublishComment: function(form){
        Ext.Msg.alert(form.getValues().comment);
    },

    doAvatarTap: function(index, record){
        console.log('avatartap');
    },

    doUpTap: function(index, record){
        console.log('uptap');
    },

    doCommentTap: function(index, record){
        console.log('commenttap');
    }

});
