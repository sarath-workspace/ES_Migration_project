/**
 * 
 */
Ext.define('ESMG.view.general.TabPanel' ,{
	extend: 'ESMG.view.basic.TabPanel',
	alias : 'widget.maintabpanel',
	requires: ['ESMG.view.general.NewTab'],
	items:[{
		xtype : 'defaulttab'
	},{
		xtype : 'panel',
		title : '<b>+</b>',
	}]
});