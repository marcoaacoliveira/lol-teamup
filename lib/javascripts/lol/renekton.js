window.LoL = window.LoL || {};

LoL.Renekton = LoL.Nasus.extend({
}).statics({
  connect: function(resource) {
    return new this(resource);
  },
  dropAll: function() {
    (new this()).store.clear();
  }
}).methods({
  store: sessionStorage
});