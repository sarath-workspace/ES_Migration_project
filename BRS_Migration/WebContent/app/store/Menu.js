/**
 * 
 */
Ext.define('ESMG.store.Menu', {
	extend: 'Ext.data.TreeStore',
	autoLoad:true,
    root: {
        expanded: true,
        children: [{
        		text: "Manual Testing", 
        		expanded: true, 
        		children: [{ 
        				text: "New Testing", 
        				leaf: true 
        			},{ 
        				text: "Analysis", 
        				leaf: true
        			},{ 
        				text: "A/B Testing",
        				leaf: true
        			},{ 
        				text: "Test Report",
        				leaf: true
        			}]
        	},{
        		text: "Automatic Testing", 
        		expanded: true, 
        		children: [{ 
        				text: "Analysis", 
        				leaf: true
        			},{ 
        				text: "A/B Testing",
        				leaf: true
        			},{ 
        				text: "Test Report",
        				leaf: true
        			}]
        	}]
    }
});

