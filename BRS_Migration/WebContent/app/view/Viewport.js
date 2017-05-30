Ext.define('ESMG.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: ['ESMG.view.department.List', 
			   'ESMG.view.user.List',
			   'ESMG.view.general.Header',
			   'ESMG.view.general.Menu',
			   'ESMG.view.general.TabPanel',
			   'ESMG.view.general.ManualView',
			   'ESMG.view.general.AutomaticView',
			   'ESMG.view.general.NewTab'],
	layout: 'border',
	config: {
		items: [
		        {
	        region: 'north',
//	        html: '<h1 class="x-panel-header">Page Title</h1>',
	        xtype: 'header1',
	        border: false,
	        margins: '0 0 5 0',
	        height: 100
	    },
	    {
	    	region: 'west',
		 	width: 200,
		 	xtype: 'menulist',
		 	collapsible: true,
		},
		{
			region: 'center',
			xtype: 'maintabpanel'
		}]
	}
});
