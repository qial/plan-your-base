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

Ext.define('GeekFlicks.view.Movies', {
    extend: 'Ext.grid.Panel',
    id: "movies_editor",
    alias: 'widget.movieseditor',
    store: 'Movies',
    initComponent: function () {
        //note: store removed
        this.columns = [{
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }, {
            header: 'Year',
            dataIndex: 'year',
            flex: 1
        }];
        this.callParent(arguments);

    }
});