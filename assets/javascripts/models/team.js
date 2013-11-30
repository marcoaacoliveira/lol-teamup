var User = LoL.Sivir.extend(function(attributes) {
  this.shelf = "teams";
  
  var defaults = {
    name: "",
    users: "",
    role: "",
    tier: ""
  };
  this.setAttributes(defaults, attributes);
}).statics(
  LoL.Sivir.statics()
).methods({

});