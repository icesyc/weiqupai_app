Ext.define('WeiQuPai.view.FieldForm', {
    extend: 'Ext.form.Panel',
    xtype: 'fieldform',
    config: {
        title: null,
        field: null,
        value: null,
        scrollable: 'vertical',
        cls: 'bg_ef',
        items: [{
            xtype: 'vtitlebar',
            docked: 'top',
            items: [{
                xtype: 'button',
                baseCls: 'arrow_left',
                action: 'back'
            }]
        }, {
            xtype: 'fieldset',
            cls: 'w-fieldset-full',
            items: [{
                name: 'name',
                xtype: 'textfield',
                cls: 'w-input-fullwidth',
                placeHolder: '',
                autoComplete: false
            }]
        }, {
            xtype: 'button',
            baseCls: 'w-button',
            text: '保存',
            action: 'save',
            disabled: true
        }]
    },

    applyField: function(field) {
        this.down('textfield').setName(field);
        return field;
    },

    applyTitle: function(title) {
        this.down('textfield').setPlaceHolder(title);
        this.down('titlebar').setTitle(title);
        return title;
    },

    applyValue: function(value) {
        this.down('textfield').setValue(value);
        return value;
    },

    initialize: function() {
        this.setButtonState();
        this.down('textfield').on('keyup', this.setButtonState, this);
        this.down('button[action=save]').on('tap', this.saveProfile, this);
    },

    setButtonState: function() {
        var disabled = !this.down('textfield').getValue();
        this.down('button[action=save]').setDisabled(disabled);
    },

    saveProfile: function() {
        var user = WeiQuPai.Cache.get('currentUser');
        var field = this.getField();
        var value = this.down('textfield').getValue();
        //没修改直接返回
        if (user[field] == value) {
            Ext.Viewport.down('main').pop();
            return;
        }
        var form = this;
        WeiQuPai.Util.mask();
        WeiQuPai.Util.updateProfile(this.getValues(), function() {
            WeiQuPai.Util.unmask();
            form.reset();
            var preview = Ext.Viewport.down('main').pop();
            preview.down('#' + field).setContent(value);
            //保存到本地缓存
            user[field] = value;
            WeiQuPai.Cache.set('currentUser', user);
        })
    }
});