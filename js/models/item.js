define([
  "lib/backbone"
  ], function(Backbone){

  var Item = Backbone.Model.extend({
    defualts: {
      price: 50,
      photo: "http://placehold.it/100x100"
    }
  });
  return Item;
});