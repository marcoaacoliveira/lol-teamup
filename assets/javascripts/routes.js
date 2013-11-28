// Routes and actions for the application.
// Every route must be connected with the pairs url: function
var Routes = {
  "pages/about": function(data) {
    var template = Handlebars.compile(data);
    mainContainer.html(template());
  },
  "users/dashboard": function(data) {
    var template = Handlebars.compile(data);
    mainContainer.html(template());    
  },
  rootUrl: "users/dashboard"
}