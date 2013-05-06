Ext.define('Qalendar.store.Items', {
    extend: 'Ext.data.Store',
    model: 'Qalendar.model.Item',
    proxy: {
    	type: 'ajax',
        api: {
            create: 'http://silver-surfer.home.qial.net/json/item/new.json',
            read: 'http://silver-surfer.home.qial.net/json/items.json',
            update: 'http://silver-surfer.home.qial.net/json/item/edit.json',
            destroy: 'http://silver-surfer.home.qial.net/json/item/delete.json',
        },
        reader: {
            type: 'json',
            root: 'items',
            successProperty: 'success'
        }
    },
	autoLoad: true

    /*
    data: [{
    	id: 1,
    	title: 'Item 1',
    	desc: 'Item 1 description',
    	amount: 0,
    	date: null
    },{
    	id: 2,
    	title: 'Item 2',
    	desc: 'Item 2 description',
    	amount: 0,
    	date: null
    },{
    	id: 3,
    	title: 'Item 3',
    	desc: 'Item 3 description',
    	amount: 0,
    	date: null
    },{
    	id: 4,
    	title: 'Item 4',
    	desc: 'Item 4 description',
    	amount: 0,
    	date: null
    }]*/
});