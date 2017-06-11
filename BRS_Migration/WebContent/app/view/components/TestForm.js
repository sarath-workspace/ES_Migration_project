/**
 * 
 */
Ext.define('ESMG.view.components.TestForm' ,{
	extend: 'ESMG.view.basic.Panel',
	alias : 'widget.testform',
	title : 'Single Query Testing',
	requires: ['ESMG.store.Collections','Ext.ux.form.ItemSelector','ESMG.view.components.CollectionCombo',
		'ESMG.view.components.ColTypeRadio','ESMG.view.components.DocumentTypeCombo','ESMG.view.components.FamilySpec',
		'ESMG.view.components.PreferedDocCombo','ESMG.view.components.SingleReport'],
	layout : 'hbox',
	items : [{
		xtype : 'form',
		border : false,
		flex : 1,
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
	        name: 'testquery',
	        anchor    : '100%',
	        allowBlank: false,
	        itemId : 'testquery'
		},{
			xtype : 'coltyperadio',
		},{
			xtype : 'documentTypeCombo',
			store: Ext.create('ESMG.store.DataType',{autoLoad:true}),
		},{
			xtype : 'collectioncombo',
			store: Ext.create('ESMG.store.Collections',{autoLoad:true,}),
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
				xtype : 'familyspec',
				store: Ext.create('ESMG.store.Family',{autoLoad:true}),
			},{
				xtype : 'preferedocombo',
				store: Ext.create('ESMG.store.DocPreference',{autoLoad:true}),
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
			}]
		}],
		buttons: [{
			text : 'Reset',
			handler: function() {
				debugger;
	            this.up('form').getForm().reset();
	            var ctrlRef = ESMG.getApplication().getController('NewTest');
	            ctrlRef.updateVisibility(this,'#citation',false);
	            ctrlRef.updateVisibility(this,'preferedocombo',false);
	            ctrlRef.updateVisibility(this,'#authority',false);
	        }
		},{
			text : 'Submit',
	        formBind: true,
	        disabled: true,
		}]
	},{
		xtype : 'singlepagereport',
		header : false,
		flex : 2,
		anchor    : '100%',
	}]
})