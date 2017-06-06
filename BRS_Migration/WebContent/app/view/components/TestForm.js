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
	        anchor    : '100%',
	        allowBlank: false,
		},{
			xtype: 'radiogroup',
	        fieldLabel: 'Collection Type',
	        itemId : 'col_type',
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
			itemId : 'collections',
			multiSelect : true,
		    store: Ext.create('ESMG.store.Collections',{autoLoad:true}),
		    queryMode: 'local',
		    displayField: 'name',
		    valueField: 'name',
		    anchor    : '100%',
		    editable : false,
		    allowBlank: false,
		},{
			xtype: 'combobox',
	        fieldLabel: 'Search On Datatype',
	        itemId : 'search_data_type',
	        store: Ext.create('ESMG.store.DataType',{autoLoad:true}),
	        queryMode: 'local',
		    displayField: 'name',
		    valueField: 'value',
	        name: 'doc_type',
		    editable : false,
	        anchor    : '100%'
		},{
			xtype : 'fieldset',
			title : '<b>Filter Specification</b>',
			items : [{
				xtype: 'radiogroup',
		        fieldLabel: 'Filter Type',
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
				itemId : 'familyspec',
				store: Ext.create('ESMG.store.Family',{autoLoad:true}),
				queryMode: 'local',
			    displayField: 'name',
			    valueField: 'value',
			    editable : false,
			    anchor    : '100%'
			},{
				xtype : 'combobox',
				fieldLabel: 'Prefered Document',
				itemId : 'prefered_doc',
				name : 'doc_pref',
				store: Ext.create('ESMG.store.DocPreference',{autoLoad:true}),
				queryMode: 'local',
			    displayField: 'name',
			    valueField: 'value',
			    anchor    : '100%',
			    editable : false,
	            hidden : true
			},{
				xtype: 'fieldcontainer',
		        layout: 'hbox',
		        itemId : 'citation',
	            hidden : true,
		        items: [{
		        		xtype : 'checkbox',
		            	boxLabel: 'forward', 
		            	name: 'fcitation', 
		            	inputValue: 'fcitation', 
		            	checked: true,
		            	flex : 1
		            },{ 
		            	xtype : 'checkbox',
		            	boxLabel: 'backward', 
		            	name: 'bcitation', 
		            	inputValue: 'bcitation',
		            	flex : 1
		            },{
		            	xtype : 'checkbox',
		            	boxLabel: 'dwpi basic', 
		            	name: 'dcitation', 
		            	inputValue: 'dwbcitation',
		            	itemId : 'dwpi_basic',
		            	hidden : true,
		            	flex : 1
		            },{
		            	xtype: 'textfield',
		            	value : '500',
		            	readOnly : true,
		            	width : 70,
		            	flex : 1
		            }]
		    },{
	            xtype: 'multiselectfield',
	            name: 'itemselector',
	            ddReorder : true,
	            itemId: 'authority',
	            height : 200,
	            anchor: '100%',
	            fieldLabel: 'Authority and Type',
	            store: Ext.create('ESMG.store.Authority',{autoLoad:true}),
	            displayField: 'name',
	            valueField: 'value',
	            hidden : true
//	            allowBlank: false,
			}]
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
})