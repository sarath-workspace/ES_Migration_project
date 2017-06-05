/**
 * 
 */
Ext.define('ESMG.store.Authority', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.NameValue',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/authority.json'
	},
	reader: {
		type: 'json',
		root: 'authority',
		successProperty: 'success'
		}
	}
});