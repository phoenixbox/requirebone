define([
  "lib/backbone",
  "models/item",
  "views/itemview"
  ], function(Backbone, Item, ItemView){

    var ItemCollectionView = Backbone.View.extend({
      el: "#yourcart",
      initialize: function(collection){
        this.collection = collection;
        this.render();

        this.collection.on("reset", this.render, this);
      },
      render: function(){
        this.$el.html("");
        this.collection.each(function(item){
          this.renderItem(item);
        }, this);
      },
      renderItem: function(item){
        var itemView = new ItemView({model:item});
        this.$el.append(itemView.render().el);
      }
    });
    return ItemCollectionView;
});