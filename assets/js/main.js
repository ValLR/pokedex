$(document).ready(function(){
	  $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        dataType: 'JSON',
        data: {"limit": '811'},
    })
    
    .done(function(res) {
        console.log("success");
        console.log(res);
        //el for recorre todas las imagenes 
        for (var i = 1; i < 719; i++) {
            var pokeimg = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
            $(".poke-container").append(pokeimg);
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    })
})