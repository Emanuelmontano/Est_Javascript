 $(document).ready(function() {
    $("#boton1").click(function() {
        var div1 = $("div").get(0);
        $(div1).html("<b>Mi primer div modificado!!</b>")
        var div2 = $("div").get(1);
        $(div2).html("<b>Mi segundo div modificado!!</b>")
    });
    $("#boton2").click(function() {
        var div1 = $("div").get(0);
        $(div1).css("backgroundColor", "orange");
        var div2 = $("div").get(1);
        $(div2).css("backgroundColor", "purple");
    });
    $("#boton3").click(function() {
        $("#miDiv1").width("300px");
        $("#miDiv1").height("300px");
        $("#miDiv2").width("300px");
        $("#miDiv2").height("300px");
    });
    $("#boton4").click(function() {
        var divs = $("div");
        divs.addClass("miEstilo");
    });
    $("#boton5").click(function() {
        var divs = $("div");
        divs.removeClass("miEstilo");
    });
    ///
    var animales = ["Oso", "Tigre", "Aguila"];
    var vehiculo1 = {
        placa: "WER-454",
        marca: "Toyota",
        modelo: "2006"
    };
    var vehiculo2 = {
        placa: "HSJ-098",
        marca: "Mazda",
        modelo: "2009"
    };
    $("#boton6").click(function() {
        var elementos = "Elementos del arreglo animales:<br>";
        var parrafo1 = $("#p1");
        $.each(animales, function(indice, valor) {
            elementos += "Indice es: " + indice + " su valor es: " + valor + "<br>";
        });
        $(parrafo1).html(elementos);
    });
    $("#boton7").click(function() {
        var elementos = "Elementos del objeto vehiculo 1:<br>";
        var parrafo2 = $("#p2");
        $.each(vehiculo1, function(propiedad, valor) {
            elementos += propiedad + " : " + valor + "<br>";
        });
        $(parrafo2).html(elementos);
    });
    $("#boton8").click(function() {
        var elementos = "";
        var parrafo3 = $("#p3");
        if ($.inArray('Tigre', animales) !== -1) {
            $(parrafo3).html("Tigre existe en el arreglo animales!!");
        } else {
            $(parrafo3).html("Tigre no existe en el arreglo animales!!");
        }
    });
    $("#boton9").click(function() {
        var elementos = "Propiedades del objeto vehiculo 1 cambiadas!:<br>";
        var parrafo4 = $("#p4");
        var vehiculo3 = $.extend(vehiculo1, vehiculo2);
        $.each(vehiculo3, function(propiedad, valor) {
            elementos += propiedad + " : " + valor + "<br>";
        });
        $(parrafo4).html(elementos);
    });
});