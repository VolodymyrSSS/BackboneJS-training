WebsiteModel = Backbone.Model.extend({
  defaults: { // define defaults values for the model
    name: 'An unknown Website',
    barcode: -1
  },
  initialize: function() {
  }
})

// Get/Set the attributes in BackboneJS:
$(document).ready(function() {
  var modelOne = new WebsiteModel();
  modelOne.set({name: 'An even cooler Website'});
  modelOne.set({barcode: 69});
  alert('Hello Model1!  Here we\'ve got title: ' + ' ' + modelOne.get('name') + ' ' + 'it\'s ' + ' ' + modelOne.get('barcode'));
});
