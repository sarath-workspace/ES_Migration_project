/**
 * 
 */
Ext.define('ESMG.view.components.SingleReport' ,{
	extend: 'ESMG.view.basic.FormPanel',
	alias : 'widget.singlepagereport',
	title : 'Test Detailed Report',
//	requires: [],
	border : false,
	margin : '10px 20px 20px 20px',
	fieldDefaults : {
		labelWidth : 150,
		height : '30px',
	},
	items : [{
		xtype : 'displayfield',
		fieldLabel : '<b>Test Query </b>',
		itemId : 'query'
	},{
		xtype : 'displayfield',
		fieldLabel : '<b>Collection Type </b>',
		itemId : 'colectiontype'
	},{
		xtype : 'displayfield',
		fieldLabel : '<b>Search On Datatype </b>',
		itemId : 'searchdatatype'
	},{
		xtype : 'displayfield',
		fieldLabel : '<b>Collections </b>',
		itemId : 'collectionids'
	},{
		xtype : 'displayfield',
		fieldLabel : '<b>Filter Specification </b>',
		itemId : 'filterspec'
	}]
});