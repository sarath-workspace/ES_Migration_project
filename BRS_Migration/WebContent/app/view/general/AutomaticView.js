/**
 * 
 */
Ext.define('ESMG.view.general.AutomaticView' ,{
	extend: 'Ext.view.View',
	alias : 'widget.autodata',
	store: Ext.create('ESMG.store.Automatic',{autoLoad:true}),
	border: false,
	margin : '5px 0px 0px 20px',
	tpl: [
          '<tpl for=".">',
              '<div class="thumb-wrap" id="{name:stripTags}">',
                  '<div class="thumb"><img src="{url}" title="{name:htmlEncode}" height="100" width="100" /></div>',
                  '<b><span class="x-editable">{shortName:htmlEncode}</span></b>',
              '</div>',
          '</tpl>',
          '<div class="x-clear"></div>'
      ],
      multiSelect: true,
      trackOver: true,
      overItemCls: 'x-item-over',
      itemSelector: 'div.thumb-wrap',
      emptyText: 'No images to display',
//      plugins: [
//          Ext.create('Ext.ux.DataView.DragSelector', {}),
//          Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
//      ],
      prepareData: function(data) {
          Ext.apply(data, {
              shortName: Ext.util.Format.ellipsis(data.name, 15),
              sizeString: Ext.util.Format.fileSize(data.size),
              dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
          });
          return data;
      },
});