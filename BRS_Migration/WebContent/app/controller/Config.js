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
//	init: function() {
//		this.control({
//			'departmentlist': {
//				itemclick: this.showDepartmentUser
//			}
//		});
//	},
//	showDepartmentUser: function(grid, model, itemEl, idx, e, eOpts) {
//		var app = this.application;
//		app.fireEvent('departmentselected', app, model);
//	}
});

