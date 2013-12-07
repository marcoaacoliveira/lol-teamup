var Session = LoL.Cassiopeia.extend(function(attributes) {
  this.shelf = "sessions";
  
  var defaults = {
    id: ""
  };
  this.setAttributes(defaults, attributes);
}).statics(
  LoL.Cassiopeia.statics()
).methods({

});