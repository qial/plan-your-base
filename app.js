Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'Qalendar',
    appFolder: 'app',
    controllers: ['Items'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
            	xtype: 'panel',
            	title: 'Qalendar Yay',
            	items: [{
            		xtype: 'itemlist'
            	}]
            }]
        });
    }
});