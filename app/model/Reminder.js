Ext.define('Qalendar.model.Reminder', {
    extend: 'Ext.data.Model',
    fields: [{
        name: '_id',
    	type: 'String'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'desc',
        type: 'string'
    }, {
    	name: 'date',
    	type: 'string'
    }]
});