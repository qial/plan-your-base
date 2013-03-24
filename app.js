Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'Qalendar',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
              title: 'Hello Ext',
              html : 'Hello! Welcome to Ext JS.'
            }]
        });
    }
});