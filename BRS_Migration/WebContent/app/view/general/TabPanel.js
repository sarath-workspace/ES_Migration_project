/**
 * 
 */
Ext.define('ESMG.view.general.TabPanel' ,{
	extend: 'Ext.tab.Panel',
	alias : 'widget.maintabpanel',
	requires: ['ESMG.view.general.NewTab'],
	items:[{
		xtype : 'defaulttab'
	},{
		xtype : 'panel',
		title : '<b>+</b>',
	}]
});