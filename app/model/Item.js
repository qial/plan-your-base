Ext.define('Qalendar.model.Item', {
    extend: 'Ext.data.Model',
    fields: [{
    	name: 'id',
    	type: 'int'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'desc',
        type: 'string'
    }, {
    	name: 'amount',
    	type: 'double'
    }, {
    	name: 'date',
    	type: 'string'
    }]
});