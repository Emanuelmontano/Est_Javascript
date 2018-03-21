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

$(document).ready(function(){
  $("#acBoton1").click(function() {
    $("#acDiv").addClass("acEstilo2", 1000, "easeOutExpo");
  });
  $("#acBoton2").click(function() {
    $("#acDiv").removeClass("acEstilo2", 1000, "easeOutExpo");
  });

  $("#acBoton3").click(function() {
    $("#acparrafo").addClass("acEstilo3", 3000, "easeInCirc");
  });
  $("#acBoton4").click(function() {
    $("#acparrafo").removeClass("acEstilo3", 3000, "easeInCubic");
  });

  $("#acBoton5").click(function() {
    $("#acIput1").addClass("acEstilo4", 3000, "easeOutBack");
  });
  $("#acBoton6").click(function() {
    $("#acIput1").removeClass("acEstilo4", 3000, "easeOutElastic");
  });
});

$(document).ready(function(){
  $("#aBoton1").click(function() {
    $("#aDiv").animate({
      color: "yellow",
      backgroundColor: "green",
      borderTopColor: "blue"
    });
  });
  $("#aDiv2").click(function() {
    $("#aDiv2").animate({
      backgroundColor: "yellow",
      borderTopColor: "red"
    });
  });

  $("#txtArea").focus(function() {
      $("#txtArea").animate({
          color: "yellow",
          backgroundColor: "green"
      });
  });
  $("#txtArea").blur(function() {
      $("#txtArea").animate({
          color: "blue",
          backgroundColor: "black"
      });
  });

  $("#anombre").blur(function() {
    if ($("#anombre").val().trim().length == 0) {
        $("#anombre").animate({
          outlineColor:"black",
          backgroundColor: "red"
        }); 
    }else{
        $("#anombre").animate({
          outlineColor:"black",
          backgroundColor: "while"
        });
    }
  });
  $("#aapellido").blur(function() {
    if ($("#aapellido").val().trim().length == 0) {
        $("#aapellido").animate({
          outlineColor:"black",
          backgroundColor: "red"
        }); 
    }else{
        $("#aapellido").animate({
          outlineColor:"black",
          backgroundColor: "while"
        });
    }
  });

  $("#aBoton2").click(function() {
    alert("Datos Enviado Exitosamente");
    $("#anombre").val("");
    $("#aapellido").val("");
  });

});

$(document).ready(function() {
    var efecto = "";
    $("#ebopciones").change(function() {
        var opcion = $(this).val();
        switch (opcion) {
            case "easeInCubic":
                efecto = "easeInCubic";
                break;
            case "easeInQuint":
                efecto = "easeInQuint";
                break;
            case "easeInCirc":
                efecto = "easeInCirc";
                break;
            case "easeInElastic":
                efecto = "easeInElastic";
                break;
        }
    })
    $("#ebboton1").click(function() {
      $("#ebmiDiv").addClass( "ebEstilo2", 2000, efecto );
    });
    $("#ebboton2").click(function() {
      $("#ebmiDiv").removeClass( "ebEstilo2", 2000, efecto );
    });
});

$(document).ready(function() {
    $("#btn_explode").click(function() {
        $("#effmiDiv").effect("explode", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_shake").click(function() {
        $("#effmiDiv").effect("shake", 4000, function() {
             $(this).show();
        });
    });
    $("#btn_fold").click(function() {
        $("#effmiDiv").effect("fold", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_bounce").click(function() {
        $("#effmiDiv").effect("bounce", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_blind").click(function() {
        $("#effmiDiv").effect("blind", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_fade").click(function() {
        $("#effmiDiv").effect("fade", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_clip").click(function() {
        $("#effmiDiv").effect("clip", 4000, function() {
            $(this).show();
        });
    });

    $("#btn_drop").click(function() {
        $("#effmiDiv").effect("drop", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_puff").click(function() {
        $("#effmiDiv").effect("puff", 4000, function() {
            $(this).show();
        });
    });
    $("#btn_pulsate").click(function() {
        $("#effmiDiv").effect("pulsate", 4000, function() {
            $(this).show();
        });
    });
});

$(document).ready(function() {
    $("#moboton1").click(function() {
        $("#mo_miDiv1").hide("explode", 4000);
    });
    $("#moboton2").click(function() {
        $("#mo_miDiv1").show("shake", 4000)
    });

    $("#moboton3").click(function() {
        $("#mo_miDiv1").hide("scale", 4000);
    });
    $("#moboton4").click(function() {
        $("#mo_miDiv1").show("drop", 4000)
    });

    $("#moboton5").click(function() {
        $("#mo_miDiv1").hide("blind", 4000);
    });
    $("#moboton6").click(function() {
        $("#mo_miDiv1").show("fade", 4000)
    });

    $("#moboton7").click(function() {
        $("#mo_miDiv1").hide("fold", 4000);
    });
    $("#moboton8").click(function() {
        $("#mo_miDiv1").show("highlight", 4000)
    });

    $("#moboton9").click(function() {
        $("#mo_miDiv1").hide("clip", 4000);
    });
    $("#moboton10").click(function() {
        $("#mo_miDiv1").show("bounce", 4000)
    });

    $("#moboton11").click(function() {
        $("#mo_miDiv1").hide("slide", 4000);
    });
    $("#moboton12").click(function() {
        $("#mo_miDiv1").show("size", 4000)
    });

    $("#moboton13").click(function() {
        $("#mo_miDiv1").hide("puff", 4000);
    });
    $("#moboton14").click(function() {
        $("#mo_miDiv1").show("pulsate", 4000)
    });
});

$(document).ready(function() {
    $("#scboton1").click(function() {
        $("#sc_miDiv1").switchClass("scEstilo1", "scEstilo2", 2000, "easeInBounce");
    });
});

$(document).ready(function() {
    $("#scboton3").click(function() {
        $("#scmiDiv2").switchClass("scEstilo3", "scEstilo4", 2000, "easeInElastic");
    });
    $("#scboton4").click(function() {
        $("#scmiDiv2").switchClass("scEstilo4", "scEstilo3", 2000, "easeOutElastic");
    });

    $("#scboton5").click(function() {
        $("#scmiDiv2").switchClass("scEstilo3", "scEstilo4", 2000, "easeInCirc");
    });
    $("#scboton6").click(function() {
        $("#scmiDiv2").switchClass("scEstilo4", "scEstilo3", 2000, "easeOutCirc");
    });

    $("#scboton7").click(function() {
        $("#scmiDiv2").switchClass("scEstilo3", "scEstilo4", 2000, "easeInQuint");
    });
    $("#scboton8").click(function() {
        $("#scmiDiv2").switchClass("scEstilo4", "scEstilo3", 2000, "easeOutQuint");
    });
});

$(document).ready(function() {
    $("#tcboton1").click(function() {
      $( "#tcmiDiv1" ).toggle('pulsate', 3000);
    });
    $("#tcboton2").click(function() {
      $("#tcmiDiv1").toggleClass ("tcEstilo3",3000, "easeInBounce");
    });
    $("#tcboton3").click(function() {
      $( "#tcmiDiv1" ).toggle('explode', 3000);
    });

    $("#tcDiv1").position({
        my: "right bottom",
        at: "right bottom",
        of: "#tcelementoObjetivo"
    });

    $("#tcDiv2").position({
        my: "right bottom",
        at: "left top",
        of: "#tcelementoObjetivo",
    });

    $("#tcDiv3").position({
        my: "center",
        at: "center",
        of: "#tcelementoObjetivo",
    });
});