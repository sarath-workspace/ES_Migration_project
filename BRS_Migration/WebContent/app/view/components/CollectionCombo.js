/**
 * 
 */
Ext.define('ESMG.view.components.CollectionCombo' ,{
	extend: 'ESMG.view.basic.ComboBox',
	alias : 'widget.collectioncombo',
	fieldLabel: 'Collections',
	name : 'collections',
	multiSelect : true,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'name',
    anchor    : '100%',
    allowBlank: false,
});