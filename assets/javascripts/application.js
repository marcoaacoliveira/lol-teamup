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