/**
 * 
 */
Ext.define('ESMG.view.components.DocumentTypeCombo' ,{
	extend: 'ESMG.view.basic.ComboBox',
	alias : 'widget.documentTypeCombo',
	fieldLabel: 'Search On Datatype',
    queryMode: 'local',
    displayField: 'name',
    valueField: 'value',
    name: 'doc_type',
    editable : false,
    anchor    : '100%'
});