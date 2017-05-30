Ext.define('ESMG.store.Departments', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.Department',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/departments.json'
	},
	reader: {
		type: 'json',
		root: 'departments',
		successProperty: 'success'
		}
	}
});

