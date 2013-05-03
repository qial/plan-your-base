Ext.define('Qalendar.view.NewItem', {
    extend: 'Ext.window.Window',
    id: "new_item",
    alias: 'widget.newitem',
	height: 200,
	width: 400,
	layout: 'fit',
    items: [{
    	xtype: 'form',
    	title: 'New Item',
        // The form will submit an AJAX request to this URL when submitted
        url: 'save-form.php',
    	// The fields
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank: false
        },{
            fieldLabel: 'Last Name',
            name: 'last',
            allowBlank: false
        }]
    }]
//        this.columns = [{
//        	header: 'ID',
//        	dataIndex: 'id',
//        	flex: 1
//        }, {
//            header: 'Title',
//            dataIndex: 'title',
//            flex: 1
//        }, {
//            header: 'Desc',
//            dataIndex: 'desc',
//            flex: 1
//        }, {
//        	header: 'Amount',
//        	dataIndex: 'amount',
//        	flex: 1
//        }];
//        this.callParent(arguments);
    }
});