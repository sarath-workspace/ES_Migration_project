/**
 * 
 */
Ext.define('ESMG.view.components.TestPanel' ,{
	extend: 'ESMG.view.basic.TabPanel',
	alias : 'widget.testpanel',
	requires: ['ESMG.view.components.NewTest',
	           'ESMG.view.components.TestForm'],
	items : [{
		xtype : 'testform'
	},{
		xtype : 'newtest'
	}]
})