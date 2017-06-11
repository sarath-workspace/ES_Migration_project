/**
 * 
 */
Ext.define('ESMG.controller.ViewModel', {
	extend: 'Ext.app.Controller',
	config: {
	stores: ['Manual','Automatic'],
	views: ['general.ManualView',
	        'general.AutomaticView']
	},
	init: function() {
		this.control({
			'manualdata': {
				itemclick: this.handleSelect
			},
			'autodata': {
				itemclick: this.handleSelect
			}
		});
	},
	
	handleSelect: function (ViewModel, record) {
		var tabPanel = ViewModel.up('tabpanel');
		var newTab = Ext.create(record.data.component);
		var activeTabIndex = tabPanel.items.findIndex('id', tabPanel.getActiveTab().id);
		newTab.closable = true;
		tabPanel.insert(activeTabIndex+1,newTab);
		tabPanel.activeTab.close();
		tabPanel.setActiveTab(activeTabIndex);
		tabPanel.activeTab.closable = true;
		tabPanel.getActiveTab().setTitle(record.data.name);
	},
});
