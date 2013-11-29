var User = LoL.Sivir.extend(function(attributes) {
  this.shelf = "users";
  
  var defaults = {
    name: "",
    email: "",
    password: "",
    summoner: "",
    position: "",
    tier: ""
  };
  this.setAttributes(defaults, attributes);
});