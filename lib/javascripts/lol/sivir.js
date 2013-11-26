window.LoL = window.LoL || {};

// Sivir - A Library to handle local storage objects
LoL.Sivir = klass(function(attributes) {
  this.setAttributes({}, attributes);
}).statics({
  // Returns an array with all the elements
  all: function() {
    var all = this.driver().all(this.shelf);
    var objects = [];
    var that = this;
    all.forEach(function(item) {
      objects.push(new that(item));
    });
    return objects;
  },
  // Removes all the elements from the storage
  delete_all: function() {
    return this.driver().cleanResource(this.shelf());
  },
  // Returns the used driver
  driver: function() {
    return new this().driver;
  },
  // Return an object with its specific id
  find: function(id) {
    var item = this.driver().find(this.shelf(), id);
    return new this(item);
  },
  // Returns the name of the storage
  shelf: function() {
    return new this().shelf;
  }
}).methods({
  driver: LoL.Nasus,
  shelf: "sivirs",
  // Removes the object from the storage
  destroy: function() {
    this.driver.connect(this.shelf).destroyItem(this.get("id"));
    return this;  
  },
  // Verify if object is valid
  // TODO: Create validation specifications
  isValid: function() {
    return true;
  },
  // Save the object in storage
  save: function() {
    this.attributes = this.driver.connect(this.shelf).pushIntoResource(this.attributes);
    
    if (this.isValid()) {
      return true;
    } else {
      return false;
    }
  },
  // Set an attribute to the object
  set: function(attribute, value) {
    return this.attributes[attribute] = value;
  },
  // Set many attributes at once to the object
  setAttributes: function(defaults, attributes) {
    this.attributes = $.extend({}, defaults, attributes);
  },
  // Get an attribute from the object
  get: function(attribute) {
    return this.attributes[attribute];
  }
});
