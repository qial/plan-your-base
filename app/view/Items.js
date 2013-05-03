Ext.define('Qalendar.view.Items', {
    extend: 'Ext.grid.Panel',
    id: "items_editor",
    alias: 'widget.itemseditor',
    store: 'Items',
    initComponent: function () {
        this.columns = [{
        	header: 'ID',
        	dataIndex: 'id',
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
    }
});