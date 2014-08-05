Ext.define('WeiQuPai.controller.ShowUserLike', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'main',
            showuserlike: 'showuserlike'
        },
        control: {
            showuserlike: {
                itemtap: 'showperson'
            },

        }
    },

    showperson: function(list, index, dataItem, record, e) {
        var detailView = Ext.create('WeiQuPai.view.ItemDetail');
        detailView.setParam(record.data);
        WeiQuPai.navigator.push(detailView);
    }
});