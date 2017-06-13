/**
 * 
 */
Ext.define('ESMG.controller.Config', {
	extend: 'Ext.app.Controller',
	config: {
		stores: ['Config','Menu'],
		views: ['general.Header', 
		        'general.Config', 
		        'general.Menu']
	},
	init: function() {
		this.control({
			'menulist': {
				select : this.onMenuSelect
			}
		});
	},
	showDepartmentUser: function( menuCmp, record, index, eOpts ) {
//		var app = this.application;
//		app.fireEvent('departmentselected', app, model);
		
	}
});

