/**
 * 
 */
Ext.define('ESMG.view.general.NewTab' ,{
	extend: 'Ext.panel.Panel',
	alias : 'widget.defaulttab',
	title : 'new tab',
	requires: ['ESMG.view.general.ManualView','ESMG.view.general.AutomaticView'],
	closable: true,
	items : [{
		xtype : 'displayfield',
		value : 'Please select a Item from the Menu to continue.'
	},{
		xtype : 'panel',
		border : false,
		items : [{
			xtype : 'panel',
			border: false,
			collapsible: true,
			title: 'Manual Testing',
			margin : '10px 5px 10px 5px',
			items : [{
				xtype : 'manualdata'
			}]
		},{
			xtype : 'panel',
			border: false,
			collapsible: true,
			title: 'Automatic Testing',
			margin : '10px 5px 10px 5px',
			items : [{
				xtype : 'autodata'
			}]
		}]
	}]
});