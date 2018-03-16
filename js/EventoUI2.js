$(document).ready(function(){
	$("#acordion1").accordion();
	var valores = [ 
		"Camerun", 
		"Colombia", 
		"Chile", 
		"Croacia", 
		"Chipre"
	];
	$("#cjatxt1").autocomplete({ 
		source: valores
	});
	var icono = {
		header: "ui-icon-circle-arrow-e",
		activeHeader: "ui-icon-circle-arrow-s"
	};
	$("#acordion2").accordion({
		header: "div h3",
		icons: icono,		
		collapsible: true
	}).sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          ui.item.children("h3").triggerHandler("focusout");
          $(this).accordion("refresh");
        }
      });
});

$(document).ready(function(){
	$("button, h2")
		.button()
		.click(function(event){
			event.preventDefault();
	});
	$("#smarthphones").menu();
	$("#dialog").dialog({
		autoOpen: false
	})
	$("#boton").button().click(function(event){
		$("#dialog").dialog("open");
	});	
});

$(document).ready(function(){
	$("#barra_deter").progressbar({
		value:50
	});
	$("#barra_indet").progressbar({
		value:false
	});
});

$(document).ready(function(){
	$("#calendario").datepicker();
	$("#dateTodoslosdias").datepicker({
		showOtherMonths:true,
		selectOtherMonths:true
	});
	$("#dateFoto").datepicker({
		showOn: "button",
		buttonImage: "external/css/images/calendar.gif",
		buttonImageOnly: true,
		buttonText: "Seleccione la fecha",
		onSelect: function(date) {
			alert("La fecha seleccionada es: "+date);
		}
	});
});

$(document).ready(function(){
	$("#numeros").spinner();
	$("#rango").slider({
		range: true,
		min: 0,
		max:50,
		slide: function(event, ui){
			$("#valores").val(ui.values[0] + "-" +ui.values[1]);
		}
	});
	$("#valores").val($("#rango").slider("values", 1) );
	$("#equipos").selectmenu();
});

$(document).ready(function(){
	$("#tabs").tabs();
	$(document).tooltip();
});