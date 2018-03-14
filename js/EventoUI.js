$( function() {
	$( "#datepicker" ).datepicker();
});

//Ejemplo Funcionalidad Arrastrar 1()
$(document).ready(function() {
	var mensaje = "";
	$("#dw_Arrastrar").draggable({ 
		create: function(event, ui){ 
			$("#dw_mensaje").html(mensaje += "Evento create!<br>");
		}
	});

	$("#dw_Arrastrar").on("dragstart", function(event, ui){
	   $("#dw_mensaje").html(mensaje += "Evento start!<br>"); 
	});

	$("#dw_Arrastrar").on("drag", function(event, ui){
	   $("#dw_mensaje").html(mensaje +="Evento drag!<br>"); 
	});

	$("#dw_Arrastrar").on("dragstop", function(event, ui){
	   $("#dw_mensaje").html(mensaje +="Evento stop!<br>"); 
	});

});

//Ejemplo Funcionalidad Arrastrar 2()
$(document).ready(function() {
	$("#dw_ArrastrarCursor").draggable();
	$("#dw_ArrastrarCursor").on("dragstart", function(event, ui){
		$(this).css('cursor', 'help');
	});
	$("#dw_ArrastrarCursor").on("drag", function(event, ui){
		$(this).css('cursor', 'progress');
	});
	$("#dw_ArrastrarCursor").on("dragstop", function(event, ui){
	   $(this).css('cursor', 'default');
	});
});

//Ejemplo Funcionalidad Arrastrar 3()
$(document).ready(function() {
	$("#dw_Arrastrar3A").draggable({ 
		cursor: 'move',
		contaiment: 'document',
		helper: dw_Arrastrar3B
	});
	function dw_Arrastrar3B(event){
		return '<div id="dw_Arrastrar3B">Un clon Modificado!!!</div>';
	}
});

//Ejemplo Funcionalidad Arrastrar y mostrar posicion()
$(document).ready(function() {
	$("#dwp_posicion").draggable({ 
		cursor: 'move',
		contaiment: 'document',
		stop: eventoStop
	});
	function eventoStop(event, ui){
		var posX = parseInt(ui.offset.left);
		var posY = parseInt(ui.offset.top);
		var mensaje = "Posición X:" + posX + " - " + "Posición Y:"+ posY; 
		$("#dwp_mensaje").html(mensaje);
	}
});