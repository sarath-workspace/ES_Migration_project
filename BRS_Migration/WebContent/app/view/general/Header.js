/**
 * 
 */
Ext.define('ESMG.view.general.Header', {
	extend: 'ESMG.view.basic.Panel',
	alias : 'widget.header1',
	requires: ['ESMG.view.general.Config'],
//	layout: 'hbox',
	layout : 'border',
	items : [
	         {
		html: '<img src="https://s24.postimg.org/m34ygl8gl/Es_Migration.jpg" width="375" height="100"/>',
		region: 'west',
		flex: 1
	},{
//		width: 400,
		region: 'center'
//		flex:1
	},{
		xtype : 'grid',
		border : false,
		width : 700,
		store : Ext.create('ESMG.store.Config',{autoLoad:true}),
		header : false,
		hideHeaders : true,
		rowLines : false,
		columnLines : false,
		reagion: 'east',
		columns : [{
			dataIndex : 'name',
			flex: 1,
			renderer : function(v){
                return Ext.String.format('<b>{0}<b>', v );
            }
		},{
			dataIndex : 'value',
			flex: 4,
			renderer : function(v){
                return Ext.String.format('<i>{0}<i>', v );
            }
		}]
	}]
})