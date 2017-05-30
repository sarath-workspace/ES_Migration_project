/**
 * 
 */
Ext.define('ESMG.store.Automatic', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.DataView',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/automatic.json'
	},
	reader: {
		type: 'json',
		root: 'dataview',
		successProperty: 'success'
		}
	}
});

