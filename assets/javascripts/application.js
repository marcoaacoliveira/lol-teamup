$(document).ready(function(){
  $.ajax("views/users/new.hbs")
  .success(function(data){
    var template = Handlebars.compile(data);
    $("main .container").html(template());
    var newUser = $("#new_user");
    var tiers = newUser.find(".tier").hide();
    tiers.each(function(index, tier) {
      var tier = $(tier);
      if (tier.hasClass("current")) {
        return tier.show();
      }
    });

    newUser.find('.chevron-right').on('click', function(e) {
      var tiers = $(e.target).closest('.tiers');
      var currentTier = tiers.find(".tier.current");
      var next = currentTier.next();
      if (!next.length > 0) {
        next = tiers.find('.tier').first();
      }
      next.addClass('current');
      currentTier.removeClass('current');
      currentTier.toggle('slide', { direction: 'left' }, 500, function() {
        next.toggle('slide', { direction: 'right' }, 500);
      });
    });

    newUser.find('.chevron-left').on('click', function(e) {
      var tiers = $(e.target).closest('.tiers');
      var currentTier = tiers.find(".tier.current");
      var prev = currentTier.prev();
      if (!prev.length > 0) {
        prev = tiers.find('.tier').last();
      }
      prev.addClass('current');
      currentTier.removeClass('current');
      currentTier.toggle('slide', { direction: 'right' }, 500, function() {
        prev.toggle('slide', { direction: 'left' }, 500);
      });
    });
  })
  .error(function(data){
    $("main").html(data);
  });
});