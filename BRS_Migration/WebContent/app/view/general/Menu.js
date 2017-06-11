/**
 * 
 */
Ext.define('ESMG.view.general.Menu' ,{
	extend: 'Ext.tree.Panel',
	alias : 'widget.menulist',
	header : true,
	store: Ext.create('ESMG.store.Menu',{autoLoad:true}),
    rootVisible: false,
});
