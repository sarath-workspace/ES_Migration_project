/**
 * 
 */
Ext.define('ESMG.view.components.ColTypeRadio' ,{
	extend: 'ESMG.view.basic.RadioGroup',
	alias : 'widget.coltyperadio',
	fieldLabel: 'Collection Type',
    items: [{
    	boxLabel: 'MAT',
    	name: 'mat_info',
    	inputValue: 'mat',
    },{
    	boxLabel: 'NON-MAT',
    	name: 'mat_info',
    	inputValue: 'non-mat',
    	checked: true
    }]
});