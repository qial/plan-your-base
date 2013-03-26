Ext.define("Qalendar.controller.Items", {
    extend: 'Ext.app.Controller',
    views:  ['Items'],
    models: ['Item'],
    stores: ['Items'],
    init: function () {
        this.control({
            '#items_editor': {
                render: this.onEditorRender
            }
        });
    },

    onEditorRender: function () {
        console.log("items editor was rendered");
    }
});
