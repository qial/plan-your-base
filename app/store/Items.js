Ext.define('Qalendar.store.Items', {
    extend: 'Ext.data.Store',
    model: 'Qalendar.model.Item',
    autoload: true,
    proxy: {
    	type: 'ajax',
        url: '/data/items.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});