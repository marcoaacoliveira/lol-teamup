$(document).ready(function(){
  $.ajax("views/pages/about.hbs")
  .success(function(data){
    var template = Handlebars.compile(data);
    $("main").html(template());
  })
  .error(function(data){
    $("main").html(data);
  });
});