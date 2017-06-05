/**
 * 
 */
Ext.define('ESMG.view.components.NewTest' ,{
	extend: 'ESMG.view.basic.Panel',
	alias : 'widget.newtest',
	title : 'Multi Query Testing',
	autoScroll : true,
//	requires: ['ESMG.view.general.NewTab'],
	items:[{
		xtype : 'form',
		border : false,
		width : 400,
//		autoScroll : true,
		maxHeight : 800,
		maxWidth : 700,
		margin : '10px 0px 0px 20px',
		items : [{
			xtype: 'textfield',
	        fieldLabel: 'Test Name',
	        name: 'test_name',
	        anchor    : '100%'
		}
//		,{
//			xtype: 'radiogroup',
//			width : 300,
//	        anchor: '100%',
//			items: [{ 
//						boxLabel: 'manual input', 
//						name: 'input_text', 
//						inputValue: 'textareafield',
//						checked: true
//					},{ 
//						boxLabel: 'file input', 
//						name: 'input_text', 
//						inputValue: 'fileuploadfield', 
//					}],
////			listeners : {
////				change: function ( radioGroup, newValue, oldValue, eOpts ) {
////					
////				}
////			}
//		}
		,{
			xtype:'fileuploadfield',
			fieldLabel: 'Upload Fiele',
	        anchor    : '100%',
//	        hidden : true
		}
//		,{
//			xtype:'textareafield',
//			fieldLabel: 'Enter Query',
//	        anchor    : '100%',
//	        resizable : true,
//		}
		,{
			xtype : 'textfield',
			fieldLabel: 'Report Email',
	        anchor    : '100%'
		}],
		buttons: [{
			text : 'Reset',
			handler: function() {
	            this.up('form').getForm().reset();
	        }
		},{
			text : 'Submit',
	        formBind: true,
	        disabled: true,
		}]
	}]
});