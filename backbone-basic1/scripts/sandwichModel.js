SandwichModel = Backbone.Model.extend({
  defaults: {
    bread: 'Wheat',
  },
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    // model change events
    this.on('change:bread', function (model) {
      // listen to events
      var my_new_bread = model.get('bread');
      console.log('Hey, the bread changed to: ' + my_new_bread);
    });
  },
});

$(document).ready(function () {
  var my_sandwich = new SandwichModel();
  my_sandwich.set({ bread: 'jalapeno' });
  my_sandwich.set({ bread: 'bigWeiner' });
});
