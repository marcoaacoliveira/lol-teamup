var Nautilus = klass(function() {
}).statics({
  store: localStorage,
  all: function(resource) {
    this.getResource(resource);
    return this.getItem(resource);
  },
  cleanResource: function(resource) {
    this.store.removeItem(resource);

    return this.getResource(resource);
  },
  clear: function() {
    this.store.clear();
  },
  createResourceIfInexistent: function(resource) {
    if (typeof this.getItem(resource) === 'undefined' || this.getItem(resource) === null)
      this.createResource(resource);
  },
  createResource: function(resource) {
    this.setItem(resource, []);

    return this.getItem(resource);
  },
  find: function(id) {
    
  },
  getResource: function(resource) {
    this.createResourceIfInexistent(resource);
    return this;
  },
  getItem: function(resource) {
    return JSON.parse(this.store.getItem(resource));
  },
  pushIntoResource: function(resource, value) {
    resources = this.getItem(resource)
    resources.push(value);
    this.setItem(resource, resources);

    return true;
  },
  setItem: function(resource, value) {
    return this.store.setItem(resource, JSON.stringify(value));
  }
}).methods({});