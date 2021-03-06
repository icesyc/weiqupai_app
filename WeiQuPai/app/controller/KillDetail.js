Ext.define('WeiQuPai.controller.KillDetail', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            pageView: 'killdetail'
        },
        control: {
            pageView: {
                create: 'createAuction',
                showitem: 'doShowItem'
            }
        }
    },

    doShowItem: function(){
        var data = this.getPageView().getPoolData();
        WeiQuPai.Util.goItemView(data.item_id);
    },

    //创建拍卖
    createAuction: function(e) {
        var user = WeiQuPai.Util.checkLogin();
        if (!user) return;
        var pool_id = this.getPageView().getPoolId();
        var url = WeiQuPai.Util.apiUrl('r=appv2/myScore&pool_id=' + pool_id);
        var me = this;
        WeiQuPai.Util.get(url, function(rsp){
            if(rsp.canCreateAuction){
               var view = WeiQuPai.Util.getGlobalView('WeiQuPai.view.ConfirmDialog');
               view.setData(rsp);
               view.setConfirmAction(me.doCreate.bind(me));
               view.show();
            }else{
               var view = WeiQuPai.Util.getGlobalView('WeiQuPai.view.ScoreNotEnough');
               view.setData(rsp);
               view.show();
            }
        });
        
    },

    doCreate: function(){
        var user = WeiQuPai.Cache.get('currentUser');
        var poolId = this.getPageView().getPoolId();
        var url = WeiQuPai.Util.apiUrl('r=appv2/userAuction/create');
        data = {
            pool_id: poolId,
            token: user.token
        };
        WeiQuPai.Util.post(url, data, function(rsp) {
            var view = Ext.create('WeiQuPai.view.UserAuction');
            view.setAuctionId(rsp.id);
            var stores = ['KillEnd', 'KillEndToday', 'KillEndChannel', 'SpecialSale'];
            Ext.Array.each(stores, function(store){
                var record = Ext.getStore(store).getById(poolId);
                record && record.set('selfId', parseInt(rsp.id));
            });
            
            //替换当前视图
            var inner = WeiQuPai.navigator.getInnerItems();
            removed = inner.splice(-1, 1, view);
            WeiQuPai.navigator.remove(removed[0]);
            var animation = WeiQuPai.navigator.getLayout().getAnimation();
            WeiQuPai.navigator.getLayout().setAnimation(null);
            WeiQuPai.navigator.setActiveItem(view);
            WeiQuPai.navigator.getLayout().setAnimation(animation);
        }, {
            mask: true
        });
    }

});