/**
 * 
 */
Ext.define('ESMG.controller.NewTest', {
	extend: 'Ext.app.Controller',
	config: {
		stores: ['Collections','Family','DataType','DocPreference','Authority'],
		views : ['components.TestPanel',
		         'components.NewTest',
		         'components.TestForm']
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

