/**
 * 
 */
Ext.define('ESMG.store.DataType', {
	extend: 'Ext.data.Store',
	model: 'ESMG.model.MatInfo',
	proxy: {
	type: 'ajax',
	api: {
		read: 'data/datatype.json'
	},
	reader: {
		type: 'json',
		root: 'datatype',
		successProperty: 'success'
		}
	},
    filters : [{
    	property: 'matinfo',
        value   : /non-mat/
    }],
    sorters: [{
    	property : 'name',
    	direction: 'ASC'
    }]
});