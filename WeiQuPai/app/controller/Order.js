Ext.define('WeiQuPai.controller.Order', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            orderView: 'order',
            deliveryTimePanel: 'order disclosureitem[itemId=delivery_time]',
            deliveryTimeList: 'deliverytimelist',
            consigneePanel: 'order disclosureitem[itemId=consignee]',
            submitButton: 'button[action=submitOrder]'
        },
        control: {
            deliveryTimePanel: {
                tap: 'showDeliveryTimeList'
            },
            deliveryTimeList: {
                selected: 'selectDeliveryTime'
            },
            consigneePanel: {
                tap: 'showConsigneeList'
            },
            submitButton: {
                tap: 'submitOrder'
            }
        }
    },

    showConsigneeList: function() {
        var view = Ext.create('WeiQuPai.view.MyConsignee', {
            selectMode: true
        });
        view.on('selected', this.selectConsignee, this);
        WeiQuPai.navigator.push(view);
    },
    showDeliveryTimeList: function() {
        this.getDeliveryTimeList().show();
    },

    //选择收货人
    selectConsignee: function(record) {
        WeiQuPai.navigator.pop();
        this.getOrderView().getRecord().set('consignee_id', record.get('id'));
        var html = this.getOrderView().consigneeTpl.apply(record.getData());
        this.getConsigneePanel().setContent(html);
    },

    //选择发货时间
    selectDeliveryTime: function(list, record) {
        var title = record.get('title');
        this.getOrderView().getRecord().set('delivery_time', title);
        this.getDeliveryTimePanel().setContent(title);
        this.getDeliveryTimeList().hide();
    },

    submitOrder: function() {
        var user = WeiQuPai.Util.checkLogin();
        if (!user) return;
        var order = this.getOrderView().getRecord();
        if (!order.get('consignee_id')) {
            WeiQuPai.Util.toast('还没有选择收货地址');
            return false;
        }
        var itemData = this.getOrderView().down('#orderInfo').getData().item;
        var param = WeiQuPai.Util.filterNull(order.data);
        param.token = user.token;
        param.comment = this.getOrderView().down('textareafield').getValue();
        var controller = param.auction_type == 1 ? 'order' : 'discountOrder';
        var url = WeiQuPai.Config.apiUrl + '/?r=appv2/' + controller;
        WeiQuPai.Util.post(url, param, function(rsp) {
            //将拍过的商品保存到cache中
            WeiQuPai.Util.setCache('auction', parseInt(order.get('auction_id')));
            //如果是0元订单跳到订单详情
            if (rsp.price == 0) {
                var record = Ext.create('WeiQuPai.model.Order', rsp);
                var view = Ext.create('WeiQuPai.view.MyOrderDetail', {
                    record: record
                });
                WeiQuPai.navigator.push(view);
                setTimeout(function() {
                    WeiQuPai.Util.toast('您的订单已经提交成功，请等待发货');
                }, 400);
            }
            rsp.item = itemData;
            var view = Ext.create('WeiQuPai.view.Pay');
            view.setOrderData(rsp);
            WeiQuPai.navigator.push(view);
        }, {
            mask: true
        });
    }
});