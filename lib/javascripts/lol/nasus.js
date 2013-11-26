window.LoL = window.LoL || {};

LoL.Nasus = klass(function(resource) {
  this.resource = resource;
}).statics({
  connect: function(resource) {
    return new this(resource);
  },
  dropAll: function() {
    (new this()).store.clear();
  }
}).methods({
  resource: "",
  store: localStorage,
  all: function() {
    this.getResource();
    return this.getItem();
  },
  cleanResource: function() {
    this.store.removeItem();

    return this.getResource();
  },
  drop: function() {
    this.store.removeItem(this.resource);
  },
  createItem: function(value) {
    var resources = this.all();
    value.id = this.getLastId() + 1;
    resources.push(value);
    this.setItem(resources);
  },
  createResourceIfInexistent: function() {
    if (typeof this.getItem() === 'undefined' || this.getItem() === null) {
      this.createResource();
    }
  },
  createResource: function() {
    this.setItem([]);

    return this.getItem();
  },
  destroyItem: function(id) {
    var resources = $.extend([], this.all());
    var index = this.findIndex(id);
    resources.splice(index, 1);

    this.setItem(resources);
  },
  find: function(id) {
    var resources = this.all();
    for (var i = 0; i < resources.length; i++) {
      if (resources[i].id === id) {
        return resources[i];
      }
    }
    throw "Resource not found";
  },
  findIndex: function(id) {
    this.all().forEach(function(item, index) {
      if (item.id === id) {
        return index;
      }
    });
    return 0;
  },
  getResource: function() {
    this.createResourceIfInexistent();
    return this;
  },
  getItem: function() {
    return JSON.parse(this.store.getItem(this.resource));
  },
  getLastId: function() {
    var lastItem = this.all().slice(-1)[0];
    if (typeof lastItem === 'undefined' || lastItem === null) {
      return 0;
    }
    return lastItem.id;
  },
  pushIntoResource: function(value) {
    if (typeof value.id === 'undefined' || value.id === null) {
      this.createItem(value);
    } else {
      this.updateItem(value);
    }

    return value;
  },
  setItem: function(value) {
    return this.store.setItem(this.resource, JSON.stringify(value));
  },
  updateItem: function(value) {
    var index = this.getResource().findIndex(value.id)
    var resources = this.all(resource);
    resources[index] = value;

    this.setItem(resource, resources);

    return value;
  }
});
