StudentModel = Backbone.Model.extend({
  default: {
    name: 'unknown',
  },
});

StudentCollection = Backbone.Collection.extend({
  model: StudentModel,
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    this.on('change:faculty', function (model) {
      console.log(
        'The faculty was changed to ' +
          model.get('faculty') +
          ' for student ' +
          model.get('name')
      );
    });
    this.on('add', function (model) {
      console.log('The freaky student was added ' + model.get('name'));
    });
    this.on('remove', function (model) {
      console.log('OMG, the student was removed ' + model.get('name'));
    });
  },
});

$(document).ready(function () {
  var joni = new StudentModel({
    id: 0,
    name: 'joni',
    faculty: 'programming',
  });
  var vicky = new StudentModel({
    id: 1,
    name: 'vicky',
    faculty: 'mathematics',
  });
  var class_1 = new StudentCollection([joni, vicky]);
  // to check Model Collection works
  console.log('class_1 size: ' + class_1.size());
  displayCollectionContent('The students in a class: ', class_1);

  // add the elements to the collection
  var pepe = new StudentModel({
    id: 2,
    name: 'pepe',
    faculty: 'mathematics',
  });
  var elis = new StudentModel({
    id: 3,
    name: 'elis',
    faculty: 'programming',
  });
  class_1.add([pepe, elis]);
  displayCollectionContent('The students in a class: ', class_1);

  // remove element from the collection
  class_1.remove([pepe]);
  displayCollectionContent('The students in a class after removed: ', class_1);

  // modifying element in collection
  var student = class_1.get(1);
  student.set({ faculty: 'programming' });
  displayCollectionContent('The students in a modified class: ', class_1);
});

// create a function to see what is inside collection
function displayCollectionContent(string, collection) {
  console.log(string + ' ' + JSON.stringify(collection.toJSON()));
}
