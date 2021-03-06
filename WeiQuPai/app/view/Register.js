Ext.define('WeiQuPai.view.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'register',
    config: {
        scrollable: 'vertical',
        cls: 'register',
        items: [{
            xtype: 'vtitlebar',
            title: '注册',
            docked: 'top',
            items: [{
                baseCls: 'arrow_left',
                action: 'back'
            }]
        }, {
            xtype:'container',
            layout: 'hbox',
            items: [{
                flex: 1,
                xtype: 'textfield',
                component:{
                    type: 'tel'
                },
                name: 'uname',
                placeHolder: '输入手机号'
            },{
                xtype:'button',
                width:'100px',
                cls: 'w-button sendsms-btn',
                text: '获取验证码',
                action: 'sendsms'
            }]

        },  {
            name: 'vcode',
            xtype: 'textfield',
            component:{
                type: 'tel'
            },
            cls: 'w-input-text w-margin',
            placeHolder: '填写手机验证码',
            autoComplete: false
        }, {
            name: 'password',
            xtype: 'passwordfield',
            cls: 'w-input-text w-margin',
            placeHolder: '填写密码',
            autoComplete: false
        }, {
            name: 'nick',
            xtype: 'textfield',
            cls: 'w-input-text w-margin',
            placeHolder: '昵称',
            autoComplete: false

        }, {
            name: 'invite',
            xtype: 'textfield',
            cls: 'w-input-text w-margin',
            placeHolder: '邀请人用户名',
            autoComplete: false,
            disabled: true

        }, {
            xtype: 'button',
            text: '注册',
            cls: 'w-button w-margin',
            action: 'register',
            disabled: true
        }]
    },

    initialize: function() {
        this.down('textfield[name=uname]').on('keyup', this.setButtonState, this);
        this.down('textfield[name=nick]').on('keyup', this.setButtonState, this);
        this.down('passwordfield[name=password]').on('keyup', this.setButtonState, this);
        this.down('textfield[name=vcode]').on('keyup', this.setButtonState, this);

        this.on('painted', this.onPainted, this, {
            single: true
        });

        this.down('button[action=register]').on('tap', function() {
            this.fireEvent('register', this);
        }, this);
        
        var me = this;
        this.element.dom.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!me.down('button[action=register]').getDisabled()) {
                me.fireEvent('register', me);
            }
        }, this);
    },

    onPainted: function() {
        var self = this;
        setTimeout(function() {
            self.down('textfield[name=invite]').setDisabled(false);
        }, 1000);
    },

    setButtonState: function() {
        var disabled = this.down('textfield[name=uname]').getValue().length == 0
        || this.down('textfield[name=nick]').getValue().length == 0 
        || this.down('passwordfield[name=password]').getValue().length == 0
        || this.down('textfield[name=vcode]').getValue().length == 0;
        this.down('button[action=register]').setDisabled(disabled);
    }
});