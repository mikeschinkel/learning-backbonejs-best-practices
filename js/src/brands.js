/**
 * brands.js - Backbone Model and basic View for "Brands"
 *
 * A Brand is a type of product manufactured by under a particular name, i.e. "Diet Coke" or "Coke Zero."
 */
app.Brand = Backbone.Model.extend({
	defaults:{
		modelType:"Brand",
		title:"Untitled",
		container:null // ???
	},
	initialize: function(options) {
		this.attributes.title += " #" +(app.stack.length+1).toString();
		this.id = app.dashify(this.attributes.title);
	}
});
app.BrandView = Backbone.View.extend({
	tagName: 'div',
	className: "brand",
	initialize: function(options){
		this.options.viewType = "BrandView";
		this.model.bind('change',_.bind(this.render,this));
	},
	render: function(){
		var html = app.loadTemplate('brand-view');
		this.template = _.template(html);
		this.$el.attr('id',this.model.id);
		this.$el.attr('data-cid',this.model.cid);
		this.$el.html(this.template({brand:this.model}));
		return this;
	}
});
