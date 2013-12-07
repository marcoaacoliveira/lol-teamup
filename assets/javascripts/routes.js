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

    function move(e) {
      e.data.selector.off('click');
      var tiers = $(e.target).closest('.tiers');
      var currentTier = tiers.find(".tier.current");
      var next;
      if (e.data.direction === 'next') {
        next = currentTier.next();
      } else if (e.data.direction === 'prev') {
        next = currentTier.prev();
      }
      if (!next.length > 0) {
        if (e.data.direction === 'next') {
          next = tiers.find('.tier').first();
        } else if (e.data.direction === 'prev') {
          next = tiers.find('.tier').last();
        }
      }
      currentTier.removeClass('current');
      next.addClass('current');

      $("#tier").val(next.data('value'));

      var directions;
      if (e.data.direction === 'next') {
        directions = { currentTo: 'left', nextFrom: 'right' };
      } else if (e.data.direction === 'prev') {
        directions = { currentTo: 'right', nextFrom: 'left' };
      }
      currentTier.toggle('slide', { direction: directions.currentTo }, 350, function() {
        next.toggle('slide', { direction: directions.nextFrom }, 350, function(){
          e.data.selector.on('click', { direction: e.data.direction, selector: e.data.selector }, move);
        });
      });
    }

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

    function move(e) {
      e.data.selector.off('click');
      var tiers = $(e.target).closest('.tiers');
      var currentTier = tiers.find(".tier.current");
      var next;
      if (e.data.direction === 'next') {
        next = currentTier.next();
      } else if (e.data.direction === 'prev') {
        next = currentTier.prev();
      }
      if (!next.length > 0) {
        if (e.data.direction === 'next') {
          next = tiers.find('.tier').first();
        } else if (e.data.direction === 'prev') {
          next = tiers.find('.tier').last();
        }
      }
      currentTier.removeClass('current');
      next.addClass('current');

      $("#tier").val(next.data('value'));

      var directions;
      if (e.data.direction === 'next') {
        directions = { currentTo: 'left', nextFrom: 'right' };
      } else if (e.data.direction === 'prev') {
        directions = { currentTo: 'right', nextFrom: 'left' };
      }
      currentTier.toggle('slide', { direction: directions.currentTo }, 350, function() {
        next.toggle('slide', { direction: directions.nextFrom }, 350, function(){
          e.data.selector.on('click', { direction: e.data.direction, selector: e.data.selector }, move);
        });
      });
    }

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