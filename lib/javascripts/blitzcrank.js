var Blitzcrank = klass(function(attributes) {
  this.attributes = $.extend(this.attributes, attributes);
}).statics({
  database: "blitzcranks",
  all: function() {
    var all = Nautilus.all(this.database);
    var objects = [];
    var that = this;
    all.forEach(function(item) {
      objects.push(new that(item));
    });
    return objects;
  },
  delete_all: function() {
    return Nautilus.cleanResource(this.database);
  }
}).methods({
  attributes: {},
  database: "blitzcranks",
  save: function() {
    var nautilus = Nautilus.getResource(this.database);
    
    return nautilus.pushIntoResource(this.database, this.attributes);
  },
  set: function(attribute, value) {
    return this.attributes[attribute] = value;
  },
  get: function(attribute) {
    return this.attributes[attribute];
  }
});