/**
 * 
 */
Ext.define('ESMG.view.general.Config' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.configlist',
	title : 'config',
	store: Ext.create('ESMG.store.Config',{autoLoad:true}),
	cls: 'departments-alt',
	columns: [
		{
		header: 'Name', 
		dataIndex: 'name', 
		flex: 1
		},
		{
		header: 'Property', 
		dataIndex: 'value', 
		flex: 1
		}
	]
});