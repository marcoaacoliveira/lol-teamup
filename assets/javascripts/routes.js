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
  "users/new": function(data) {
    // Initialize template
    var template = Handlebars.compile(data);
    $("main .container").html(template({ tiers: Tiers, positions: Positions }));

    // Render methods
    var newUser = $("#new_user");
    var tiers = newUser.find(".tier").hide();
    tiers.each(function(index, tier) {
      var tier = $(tier);
      if (tier.hasClass("current")) {
        return tier.show();
      }
    });

    $(".chosen-select").chosen();

    // Attaches events
    newUser.find('.chevron-right').on(
      'click', 
      { direction: 'next', selector: newUser.find('.chevron-right') }, 
      move
    );

    newUser.find('.chevron-left').on(
      'click', 
      { direction: 'prev', selector: newUser.find('.chevron-left') }, 
      move
    );

    newUser.find('form').on('submit', function(e) {
      e.preventDefault();
      var user = new User($(this).serializeJSON());
      user.save();
    })
  },
  "teams/new_team": function(data){
  	var template = Handlebars.compile(data);
  	$("main .container").html(template({ tiers: Tiers, positions: Positions }));
    var newTeam = $("#new_team");
    var tiers = newTeam.find(".tier").hide();
    tiers.each(function(index, tier) {
      var tier = $(tier);
      if (tier.hasClass("current")) {
        return tier.show();
      }
    });

    $(".chosen-select").chosen();

    // Attaches events
    newTeam.find('.chevron-right').on(
      'click', 
      { direction: 'next', selector: newTeam.find('.chevron-right') }, 
      move
    );

    newTeam.find('.chevron-left').on(
      'click', 
      { direction: 'prev', selector: newTeam.find('.chevron-left') }, 
      move
    );

    newTeam.find('form').on('submit', function(e) {
      e.preventDefault();
      var team = new Team($(this).serializeJSON());
      team.save();
      window.alert("Time cadastro com sucesso!");
      loadRootAction("users/dashboard");
    });
  },
  rootUrl: "users/dashboard"

}