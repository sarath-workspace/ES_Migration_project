/**
 * 
 */
Ext.define('ESMG.controller.NewTest', {
	extend: 'Ext.app.Controller',
	config: {
	stores: [],
	views: ['components.NewTest']
	},
	init: function() {
		this.control({
			'newtest radiogroup' : {
				change : this.onSelChange
			}
		});
	},
	onSelChange: function(radioGroup, newValue, oldValue, eOpts) {
		debugger;
	}
});

