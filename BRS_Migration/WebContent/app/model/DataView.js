/**
 * 
 */
Ext.define('ESMG.model.DataView', {
extend: 'Ext.data.Model',
fields: [{
			name: 'name'
		},{
			name: 'url'
		},{
			name: 'component'
		},{
			name:'lastmod', type:'date', dateFormat:'timestamp'
		}]
})
