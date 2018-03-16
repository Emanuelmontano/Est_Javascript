$(document).ready(function(){
	$("#juguetes").sortable({
		placeholder: "posicion",
		connectWith: "#baul",
    });
    $("#baul").sortable({
    	placeholder: "posicion",
		connectWith: "#juguetes",
     });
});
