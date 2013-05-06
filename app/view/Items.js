Ext.define('Qalendar.view.Items', {
    extend: 'Ext.grid.Panel',
    id: "items_editor",
    alias: 'widget.itemlist',
    store: 'Items',
    initComponent: function () {
        this.columns = [{
        	header: 'ID',
        	dataIndex: '_id',
        	flex: 1
        }, {
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }, {
            header: 'Desc',
            dataIndex: 'desc',
            flex: 1
        }, {
        	header: 'Amount',
        	dataIndex: 'amount',
        	flex: 1
        }];
        this.callParent(arguments);
    },
    bbar: [{
        xtype: 'button',
        text: 'New Item',
        id: 'new_item_button'
    }]

});