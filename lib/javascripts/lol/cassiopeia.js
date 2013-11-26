window.LoL = window.LoL || {};

// Cassiopeia - A Library to handle session storage objects
// Cassiopeia inherits from Sivir, but acts uses Renekton as a driver.
LoL.Cassiopeia = LoL.Sivir.extend(function(attributes) {
  this.driver = LoL.Renekton;
  this.shelf = "cassiopeias";
}).statics(
  LoL.Sivir.statics()
).methods({
});