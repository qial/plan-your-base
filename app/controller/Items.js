Ext.define("Qalendar.controller.Items", {
    extend: 'Ext.app.Controller',
    views:  [
        'Items',
        'item.Edit'
    ],
    models: ['Item'],
    stores: ['Items'],
    init: function () {
        this.control({
            '#items_editor': {
                render: this.onEditorRender
            },
            '#new_item_button': {
                click: this.onNewItemClick
            },
            'itemlist': {
                itemdblclick: this.editItem
            },
            'itemedit button[action=save]': {
                click: this.updateItem
            }
        });
    },

    onEditorRender: function () {
        console.log("items editor was rendered");
    },

    onNewItemClick: function() {
        console.log("new item clicked");
    },

    editItem: function(grid, record) {
        var view = Ext.widget('itemedit');

        view.down('form').loadRecord(record);
    },

    updateItem: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        // synchronize with server
        this.getItemsStore().sync();
    }

});
