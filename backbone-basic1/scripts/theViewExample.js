TheView = Backbone.View.extend({
  defaults: {},

  initialize: function () {
    this.render();
  },

  render: function () {
    var template = _.template($('#nyTemplateOne').html(), {});
    this.$el.html(template);
  },

  events: {
    click: 'clicked',
    'mouseover div.cheese': 'mouseover',
  },

  clicked: function () {
    alert('button was clicked');
  },

  mouseover: function () {
    alert('Your mouse over. It turns me on');
  },
});

$(document).ready(function () {
  var bView = new TheView({ el: $('#unique-two') });
  var cView = new TheView({ el: $('#unique-three') });
});
