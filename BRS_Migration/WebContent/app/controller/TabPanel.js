/**
 * 
 */
Ext.define('ESMG.controller.TabPanel', {
	extend: 'Ext.app.Controller',
	config: {
	stores: ['Manual','Automatic'],
	views: ['general.TabPanel',
	        'general.NewTab']
	},
	init: function() {
		this.control({
			'maintabpanel': {
//				itemclick: this.showDepartmentUser
				beforetabchange: this.tabChange
			}
		});
	},
	
	tabChange: function( tabPanel, newCard, oldCard, eOpts ) {
		debugger;
		if(newCard.title != undefined && newCard.title.match("\\+") != null) {
			var newTab = Ext.create("ESMG.view.general.NewTab");
			tabPanel.insert((tabPanel.items.items.length-1),newTab);
			tabPanel.setActiveTab(tabPanel.items.items.length-2);
			return false;
		}
	}
//	showDepartmentUser: function(grid, model, itemEl, idx, e, eOpts) {
//		var app = this.application;
//		app.fireEvent('departmentselected', app, model);
//	}
});

