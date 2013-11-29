var User = LoL.Sivir.extend(function(attributes) {
  this.shelf = "users";
  
  var defaults = {
    name: "",
    email: "",
    password: "",
    summoner: "",
    role: "",
    tier: ""
  };
  this.setAttributes(defaults, attributes);
}).statics(
  LoL.Sivir.statics()
).methods({

});