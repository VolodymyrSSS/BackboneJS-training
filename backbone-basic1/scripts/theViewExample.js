TheView = Backbone.View.extend({
  defaults: {},
  initialize: function () {
    console.log('I Exist now mwa, ha, ha, ha');
    console.log(this.el);
    console.log(this.$el);
    this.$el.append('Mwa, ha, ha, ha !');
  },
});

$(document).ready(function () {
  var aView = new TheView({ el: $('#unique') });
});
