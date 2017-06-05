/**
 * 
 */
Ext.define('ESMG.view.components.TestForm' ,{
	extend: 'ESMG.view.basic.Panel',
	alias : 'widget.testform',
	title : 'Single Query Testing',
	requires: ['ESMG.store.Collections','Ext.ux.form.ItemSelector'],
	items : [{
		xtype : 'form',
		border : false,
		width : 400,
		maxHeight : 800,
		maxWidth : 700,
		margin : '10px 0px 0px 20px',
		fieldDefaults : {
			labelWidth : 150
		},
		items : [{
			xtype: 'textfield',
	        fieldLabel: 'Test Query',
	        name: 'test_name',
	        anchor    : '100%'
		},{
			xtype: 'radiogroup',
	        fieldLabel: 'Two Columns',
	        items: [{
	        	boxLabel: 'MAT',
	        	name: 'mat_info',
	        	inputValue: 'mat',
	        },{
	        	boxLabel: 'NON-MAT',
	        	name: 'mat_info',
	        	inputValue: 'non-mat',
	        	checked: true
	        }]
		},{
			xtype: 'combobox',
			fieldLabel: 'Collections',
			name : 'collections',
			multiSelect : true,
		    store: Ext.create('ESMG.store.Collections',{autoLoad:true}),
		    queryMode: 'local',
		    displayField: 'name',
		    valueField: 'name',
		    anchor    : '100%'
		},{
			xtype: 'combobox',
	        fieldLabel: 'Search On Datatype',
	        store: Ext.create('ESMG.store.DataType',{autoLoad:true}),
	        queryMode: 'local',
		    displayField: 'name',
		    valueField: 'value',
	        name: 'doc_type',
	        anchor    : '100%'
		},{
			xtype : 'fieldset',
			title : 'filter specification',
			items : [{
				xtype: 'radiogroup',
		        fieldLabel: 'Two Columns',
		        items: [{
		        	boxLabel: 'Collapse',
		        	name: 'base_filter',
		        	inputValue: 'collapse',
		        	checked: true
		        },{
		        	boxLabel: 'Expand',
		        	name: 'base_filter',
		        	inputValue: 'expand'
		        }]
			},{
				xtype : 'combobox',
				fieldLabel: 'By Family',
				name : 'family',
				store: Ext.create('ESMG.store.Family',{autoLoad:true}),
				queryMode: 'local',
			    displayField: 'name',
			    valueField: 'value',
			    anchor    : '100%'
			},{
				xtype : 'combobox',
				fieldLabel: 'Preferred Document',
				name : 'doc_pref',
				store: Ext.create('ESMG.store.DocPreference',{autoLoad:true}),
				queryMode: 'local',
			    displayField: 'name',
			    valueField: 'value',
			    anchor    : '100%',
//			    disabled : true
			},{
				xtype: 'fieldcontainer',
		        layout: 'hbox',
		        items: [{
//		        	xtype: 'checkboxgroup',
//		            fieldLabel: 'citation',
//		            items: [{ 
		        		xtype : 'checkbox',
		            	boxLabel: 'forward', 
		            	name: 'fcitation', 
		            	inputValue: 'fcitation', 
		            	checked: true,
//		            	margin : '0px 5px 0px 0px',
		            	flex : 1
		            },{ 
		            	xtype : 'checkbox',
		            	boxLabel: 'backward', 
		            	name: 'bcitation', 
		            	inputValue: 'bcitation',
//		            	margin : '0px 5px 0px 0px',
		            	flex : 1
		            },{
		            	xtype : 'checkbox',
		            	boxLabel: 'dwpi basic', 
		            	name: 'dcitation', 
		            	inputValue: 'dwbcitation',
//		            	margin : '0px 5px 0px 0px',
		            	flex : 1
		            },{
		            	xtype: 'textfield',
		            	value : '500',
		            	readOnly : true,
		            	width : 70,
//		            	margin : '0px 5px 0px 0px',
		            	flex : 1
		            }]
		    },{
	            xtype: 'multiselectfield',
	            name: 'itemselector',
	            ddReorder : true,
	            height : 200,
//	            id: 'itemselector-field',
	            anchor: '100%',
	            fieldLabel: 'Collections',
	            imagePath: '../ux/images/',
	            store: Ext.create('ESMG.store.Authority',{autoLoad:true}),
	            displayField: 'name',
	            valueField: 'value',
//	            value: ['3', '4', '6'],
	            allowBlank: false,
//	            msgTarget: 'side',
	            fromTitle: 'Available',
	            toTitle: 'Selected'
			}]
//		}]
		}

//		,{
//			xtype: 'textfield',
//	        fieldLabel: 'Filter',
//	        name: 'filters',
//	        anchor    : '100%'
//		}
		
		],
		
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
})