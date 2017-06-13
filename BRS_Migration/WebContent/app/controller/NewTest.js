/**
 * 
 */
Ext.define('ESMG.controller.NewTest', {
	extend: 'Ext.app.Controller',
	config: {
		stores: ['Collections','Family','DataType','DocPreference','Authority'],
		views : ['components.TestPanel',
		         'components.NewTest',
		         'components.TestForm',
		         'components.CollectionCombo',
		         'components.ColTypeRadio',
		         'components.DocumentTypeCombo',
		         'components.FamilySpec',
		         'components.PreferedDocCombo',
		         'components.SingleReport']
	},
	init: function() {
		this.control({
			'testform form #testquery' : {
				change : this.onQueryChange
			},
			'newtest radiogroup' : {
				change : this.onSelChange
			},
			'testform form familyspec' : {
				change : this.onFamilySelect
			},
			'testform form preferedocombo' : {
				change : this.onPreferedDocSelect
			},
			'testform form coltyperadio' : {
				change : this.applyMatInfoFilter
			},
//			'collectioncombo' : {
//				render : this.loadCollections
//			}
		});
	},
	onSelChange: function(radioGroup, newValue, oldValue, eOpts) {
		debugger;
	},
	onFamilySelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		debugger;
		if('citations' == newValue) {
			this.updateVisibility(FamilyFilter,'#citation',true);
			this.updateVisibility(FamilyFilter,'#authority',false);
			this.updateVisibility(FamilyFilter,'preferedocombo',false);
		} else if ('dpcicitations' == newValue) {
			this.updateVisibility(FamilyFilter,'#citation',true);
			this.updateVisibility(FamilyFilter,'#dwpi_basic',true);
			this.updateVisibility(FamilyFilter,'#authority',false);
			this.updateVisibility(FamilyFilter,'preferedocombo',false);
		} else {
			this.updateVisibility(FamilyFilter,'preferedocombo',true);
			this.updateVisibility(FamilyFilter,'#citation',false);
		}
	},
	onPreferedDocSelect: function (FamilyFilter, newValue, oldValue, eOpts) {
		if('rank_by_authority' == newValue) {
			this.updateVisibility(FamilyFilter,'#authority',true);
			this.updateVisibility(FamilyFilter,'#citation',false);
		} else {
			this.updateVisibility(FamilyFilter,'#authority',false);
		}
	},
	updateVisibility: function (FamilyFilter, itemId, show) {
		var comp = FamilyFilter.up('form').down(itemId);
		if(show) {
			comp.show();
			comp.allowBlank = false;
		} else {
			comp.hide();
			comp.allowBlank = true;
		}
	},
	applyMatInfoFilter: function ( radioCmp, newValue, oldValue, eOpts ) {
		this.loadCombo( radioCmp.up('form').down('collectioncombo'),newValue);
		this.loadCombo( radioCmp.up('form').down('documentTypeCombo'),newValue);
	},
	loadCombo : function (component, changedVal) {
		component.setValue([]);
		component.store.clearFilter(true);
		component.store.filterBy(function(record, id) {
            return record.data.matinfo == changedVal.mat_info;
        });
	},
	onQueryChange : function ( testQueryCmp, newValue, oldValue, eOpts ) {
		debugger;
		testQueryCmp.value
	},
	updateReport : function ( radioCmp, newValue, oldValue, eOpts ) {
		t
	}
//	loadCollections : function ( collectionCmp, eOpts ) {
//		debugger;
//	}
});

