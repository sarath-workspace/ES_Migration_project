/**
 * 
 */
Ext.define('ESMG.store.Config', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.Config',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/config.json'
	},
	reader: {
		type: 'json',
		root: 'config',
		successProperty: 'success'
		}
	}
});