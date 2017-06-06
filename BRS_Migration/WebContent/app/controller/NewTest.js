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
			},
			'testform form #col_type' : {
				change : this.applyMatInfoFilter
			}
		});
	},
	onSelChange: function(radioGroup, newValue, oldValue, eOpts) {
		debugger;
	},
	onFamilySelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		debugger;
		if('citations' == newValue) {
			this.updateVisibility(FamilyFilter,'citation',true);
			this.updateVisibility(FamilyFilter,'authority',false);
			this.updateVisibility(FamilyFilter,'prefered_doc',false);
		} else if ('dpcicitations' == newValue) {
			this.updateVisibility(FamilyFilter,'citation',true);
			this.updateVisibility(FamilyFilter,'dwpi_basic',true);
			this.updateVisibility(FamilyFilter,'authority',false);
			this.updateVisibility(FamilyFilter,'prefered_doc',false);
		} else {
			this.updateVisibility(FamilyFilter,'prefered_doc',true);
			this.updateVisibility(FamilyFilter,'citation',false);
		}
	},
	onPreferedDocSelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		if('rank_by_authority' == newValue) {
			this.updateVisibility(FamilyFilter,'authority',true);
			this.updateVisibility(FamilyFilter,'citation',false);
		} else {
			this.updateVisibility(FamilyFilter,'authority',false);
		}
	},
	updateVisibility: function (FamilyFilter, itemId, show) {
		var comp = FamilyFilter.up('form').down('#'+itemId);
		if(show) {
			comp.show();
			comp.allowBlank = false;
		} else {
			comp.hide();
			comp.allowBlank = true;
		}
	},
	applyMatInfoFilter: function ( radioCmp, newValue, oldValue, eOpts ) {
		debugger;
		radioCmp.up('form').down('#collections').store.clearFilter(true);
		radioCmp.up('form').down('#search_data_type').store.clearFilter(true);
//		radioCmp.up('form').down('#collections').store.filterBy(function(record, id) {
//            return record.data.matinfo == newValue;
//        });
//		radioCmp.up('form').down('#search_data_type').store.filterBy(function(record, id) {
//            return record.data.matinfo == newValue;
//        });
	}
});

