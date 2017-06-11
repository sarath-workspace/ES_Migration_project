/**
 * 
 */
Ext.define('ESMG.view.components.FamilySpec' ,{
	extend: 'ESMG.view.basic.ComboBox',
	alias : 'widget.familyspec',
	fieldLabel: 'By Family',
	name : 'family',
	queryMode: 'local',
    displayField: 'name',
    valueField: 'value',
    editable : false,
    anchor    : '100%'
});