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


function edit(){

	var username = document.forms["edit"]["username"].value;
	var summoner = document.forms["edit"]["summoner"].value;
	var tier = document.forms["edit"]["tier"].value;
	var role = document.forms["edit"]["role"].value;


	console.log("Ola "+username+" bem vindo! Voce eh " +tier+ "na posicao "+role);

}



