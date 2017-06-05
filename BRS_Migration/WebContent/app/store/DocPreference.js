/**
 * 
 */
Ext.define('ESMG.store.DocPreference', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.NameValue',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/document_preference.json'
	},
	reader: {
		type: 'json',
		root: 'preference',
		successProperty: 'success'
		}
	}
});
