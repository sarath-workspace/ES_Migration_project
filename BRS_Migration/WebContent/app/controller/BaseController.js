/**
 * 
 */
Ext.define('ESMG.controller.BaseController', {
	extend: 'Ext.app.Controller',
	config: {
		stores: ['Config','Menu'],
		views: ['basic.Panel',
		        'basic.TabPanel',
		        'basic.ComboBox',
		        'basic.RadioGroup']
	}
});

