function loadAction(url, route) {
  $.ajax(url)
  .success(function(data){
    Routes[route](data);
  })
  .error(function(xhr, ajaxOptions, thrownError) {
    handleRequestError(xhr, ajaxOptions, thrownError);
  });
}

function loadRootAction() {
  var url = "views/" + Routes.rootUrl + ".hbs";
  loadAction(url, Routes.rootUrl);
}

function handleRequestError(xhr, ajaxOptions, thrownError) {
  if (xhr.status == 404) {
    window.location = "/404.html";
  }
}

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
    };

// Defines the main container as a global variable
var mainContainer = $("main > .container");

$(document).ready(function(){
  // Loads the root page
  loadRootAction();

  // Links load pages through an ajax request
  $(document).on('click', 'a', function(e) {
    e.preventDefault();
    var link = $(e.target).data("href");
    if (typeof link !== 'undefined') {
      var url = "views/" + link + ".hbs"
      $('a').closest('li').removeClass("active");
      $('a[data-href="' + link + '"]').closest("li").addClass("active");
      loadAction(url, link);
    }
  });

  $(document).on('submit', 'form', function(e) {
    e.preventDefault();
  });
});