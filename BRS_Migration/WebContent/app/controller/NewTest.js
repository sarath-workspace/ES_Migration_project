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
			},
			'testform form #familyspec' : {
				change : this.onFamilySelect
			},
			'testform form #prefered_doc' : {
				change : this.onPreferedDocSelect
			} 
		});
	},
	onSelChange: function(radioGroup, newValue, oldValue, eOpts) {
		debugger;
	},
	onFamilySelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		debugger;
		if('citations' == newValue) {
			FamilyFilter.up('form').down('#citation').show();
		} else if ('dpcicitations' == newValue) {
			FamilyFilter.up('form').down('#citation').show();
			FamilyFilter.up('form').down('#dwpi_basic').show();
		} else {
			FamilyFilter.up('form').down('#prefered_doc').show();
		}
	},
	onPreferedDocSelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		if('rank_by_authority' == newValue) {
			FamilyFilter.up('form').down('#authority').show();
		}
	}
});

