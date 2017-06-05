/**
 * 
 */
Ext.define('ESMG.store.Family', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.NameValue',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/family.json'
	},
	reader: {
		type: 'json',
		root: 'family',
		successProperty: 'success'
		}
	}
});