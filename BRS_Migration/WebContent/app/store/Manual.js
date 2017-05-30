/**
 * 
 */
Ext.define('ESMG.store.Manual', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.DataView',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/manual.json'
	},
	reader: {
		type: 'json',
		root: 'dataview',
		successProperty: 'success'
		}
	}
});

