$(document).ready(function(){
  $.ajax("views/pages/about.hbs")
  .success(function(data){
    template = Handlebars.compile(data);
    creators = { creators: ["marco", "marco","hiolanda", "ruan"] }
    $("main").html(template(creators));
  })
  .error(function(data){
    $("main").html(data);
  });
});