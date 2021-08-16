TheView = Backbone.View.extend({
  defaults: {},

  initialize: function () {
    this.render();
  },

  render: function () {
    var template = _.template($('#nyTemplateOne').html(), {});
    this.$el.html(template);
  },
});

$(document).ready(function () {
  var cView = new TheView({ el: $('#unique-two') });
});
