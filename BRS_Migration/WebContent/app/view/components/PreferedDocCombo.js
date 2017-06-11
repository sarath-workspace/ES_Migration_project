/**
 * 
 */
Ext.define('ESMG.view.components.PreferedDocCombo' ,{
	extend: 'ESMG.view.basic.ComboBox',
	alias : 'widget.preferedocombo',
	fieldLabel: 'Prefered Document',
	name : 'doc_pref',
	queryMode: 'local',
    displayField: 'name',
    valueField: 'value',
    anchor    : '100%',
    editable : false,
    hidden : true
});