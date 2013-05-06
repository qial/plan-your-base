Ext.define('Qalendar.view.item.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemedit',

    title: 'Edit Item',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'title',
                        fieldLabel: 'Title'
                    },
                    {
                        xtype: 'textfield',
                        name : 'desc',
                        fieldLabel: 'Description'
                    },
                    {
                        xtype: 'textfield',
                        name : 'amount',
                        fieldLabel: 'Amount'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});