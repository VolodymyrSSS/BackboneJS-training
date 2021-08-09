var BackgroundChangeModel = Backbone.Model.extend({
  promptColor: function () {
    var cssColor = prompt('Please enter a CSS color:');
    this.set({ color: cssColor });
  },
});

window.backgroundChange = new BackgroundChangeModel();

backgroundChange.on('change:color', function (model, color) {
  $(window).css({ background: color });
});

backgroundChange.set({ color: 'tan' });

backgroundChange.promptColor();
