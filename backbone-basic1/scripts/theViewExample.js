TheView = Backbone.View.extend({
  defaults: {},

  // to create DOM-obj(or el) on a fly
  tagName: 'span', // this is html-tag like 'div, p, span ...'
  className: 'prettyCake', // class we put into html
  id: 'span1', //

  initialize: function () {
    console.log('I Exist now mwa, ha, ha, ha');
    console.log(this.el);
    console.log(this.$el);
    $('#unique').append(this.el);
    // this.$el.append('Mwa, ha, ha, ha !');
  },
});

$(document).ready(function () {
  // var aView = new TheView({ el: $('#unique') });
  var bView = new TheView();
});
