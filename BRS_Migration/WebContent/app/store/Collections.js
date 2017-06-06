/**
 * 
 */
Ext.define('ESMG.store.Collections', {
	extend : 'Ext.data.Store',
	model  : 'ESMG.model.MatInfo',
    proxy  : {
    	type  : 'ajax',
    	api   : {
    			read: 'data/collections.json'
    	},
    	reader: {
    		type           : 'json',
    		root           : 'collections',
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