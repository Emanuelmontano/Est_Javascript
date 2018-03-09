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

    //Efecto hover()
    $("li").filter(":odd").hide().end().filter(":even").hover(function(){
        $(this).toggleClass("active").next().stop(true,true).slideToggle();
    });
    $("select").change(function(){
        var fruta = "";
        $("select option:selected").each(function(){
            fruta += $(this).text() + "";
            alert("Tu fruta preferida es "+fruta);
        });
    });
    //Evento Manejadores()
    $("#em_btn1").on("click", function(){
        var mensaje = "<h2>Posicion div1</h2><br>";
        var miDiv1 = $("#em_div1");
        var posicion = miDiv1.position();
        mensaje += "left" + posicion.left + ", top " + posicion.top + "";
        $("#em_mensaje1") .html(mensaje);
    });
    $("#em_btn2").on("click", function(){
        var mensaje = "<h2>Posicion div2</h2><br>";
        var miDiv2 = $("#em_div2");
        var posicion = miDiv2.position();
        mensaje += "left" + posicion.left + ", top " + posicion.top + "";
        $("#em_mensaje2") .html(mensaje);
    });
    $("#em_div1").on("mouseenter", function(){
        var miDiv1 = $("#em_div1");
        miDiv1.height(200);
        miDiv1.width(200);
    });
    $("#em_div2").on("mouseenter", function(){
        var miDiv2 = $("#em_div2");
        miDiv2.height(200);
        miDiv2.width(200);
    });
    $("#em_div1").on("mouseout", function(){
        var miDiv1 = $("#em_div1");
        miDiv1.height(100);
        miDiv1.width(100);
    });
    $("#em_div2").on("mouseout", function(){
        var miDiv2 = $("#em_div2");
        miDiv2.height(100);
        miDiv2.width(100);
    });
    $(document).mousemove(function(event){
        $("#cpm_parrafo").text("La posicion del mouse es: X = " + event.pageX + " , Y = " + event.pageY);
    });
    $("#cpm_enlace").click(function(event) {
        event.preventDefault();
    });
    $("div").delegate(".parrafo", "click",function(){
        $(".parrafo2").css("background-color", "pink");
        $("#deg_parrafo").append("Este parrafo es nuevo y tiene el mismo evento");
    });
    $("#undeg_parrafo").click(function() {
        $(".parrafo").undelegate();
    });
    //Eventos personalizados() 1
    $(document).on("FrutasA", {
        fruta: "Fresass"
    }, function(event, arg1, arg2) {
        $("#ep_mensaje").html(event.data.fruta+"<br>"+arg1+"<br>"+arg2);
    });
    $(document).trigger("FrutasA", ["Manzana",  "Pera"]);
    //Eventos personalizados() 2
    var clientes =[];
    $("#ep1_btn1").click(function() {
     registarCliente();
     $(document).trigger( "descuento");
    });
    $( document ).on( "descuento", function( event, param1, param2 ) {
        var totalCompra = parseFloat($("#cjtxt3").val());
        var nombre = $("#cjtxt2").val();
        if (totalCompra>50000) {
          alert("El cliente "+nombre+" ganó bono de 10000 pesos!!")
        }
        limpiarCampos();
        listarClientes();
    });
    function registarCliente() {
        var id = $("#cjtxt1").val();
        var nombre = $("#cjtxt2").val();
        var totalCompra = parseFloat($("#cjtxt3").val());         
        var cliente = {
            id: id,
            nombre: nombre,
            totalCompra: totalCompra
        }
       clientes.push(cliente);
       alert("Cliente Registrado!!");       
    }
    function listarClientes() {
        var lista="<h1>Clientes</h1><br>";
        var id = $("#cjtxt1").val();
        var nombre = $("#cjtxt2").val();
        var totalCompra = parseFloat($("#cjtxt3").val());
        for (var i = 0; i < clientes.length; i++) {
            console.log(clientes[i].nombre);
            lista+="<b>Id:</b>"+clientes[i].id+"-"+"<b>Nombre:</b>"+clientes[i].nombre+"-"+"<b>Total Compra:</b>"+clientes[i].totalCompra+"<br>";
        }
        $("#ep1_clientes").html(lista);       
    }
    function limpiarCampos() {
        $("#cjtxt1").val("");
        $("#cjtxt2").val("");
        $("#cjtxt3").val("");
    }
    //Ocúltame y muéstrame
    $("#om_hide").click(function(){
        $("#om_parrafo").hide();
    });
    $("#om_show").click(function(){
        $("#om_parrafo").show();
    });
    //Animate()
    $("#ate_animate").click(function(){
        $("#ate_caja").animate({"left":"+=50px", "width":"+=5px"});
    });
    //Stop()
    $("#stop_start").click(function(){
        $("#stop_caja").animate({"width":"4000px"},10000);
    });
    $("#stop_stop").click(function(){
        $("#stop_caja").stop();
    });
    $("#tg_btn").click(function(){
        $("#tg").toggle("slow");
    });
    $("#cef_btn").click(function(){
        colaEfectos();
    });
    function colaEfectos(){
        var miDiv = $("#cef_miDiv");
        miDiv.queue(function(){
            $(this).css({
                "background-color": "blue",
            });
            $("#cef_mensaje").html("Se cambio el color del fondo a azul");
            $(this).dequeue();
        });
        miDiv.hide(1000);
        miDiv.show(1000);
        miDiv.fadeIn(3000);
        miDiv.fadeOut(3000);
        miDiv.show(1000);
    }

    $("#cef_btn1").click(function(){
        efectoDiv1();
        efectoDiv2();
        efectoDiv3();
    });

    $("#cef_btn2").click(function(){
        jQuery.queue($("div")[0], "fx", []);
        $("div").stop();
    });

    function numeroEfectos(){
        setInterval(function(){
            var numFuncionesEnCola = $("#cef_miDiv1").queue().length;
            $("#cef_numeroEfectos").html("Numero Efectos en Cola: "+ numFuncionesEnCola);
        }, 1000);
    }
    function efectoDiv1(){
        $("#cef_miDiv1").show("fast").animate({
            right:"+=400"
        }, 1000).slideToggle(2000).slideToggle("fast").animate({
            left:"-=400"
        }, 200).hide("slow").show(2000).slideUp("normal", efectoDiv1);
    }
    function efectoDiv2(){
        var miDiv2 = $("#cef_miDiv2");
        miDiv2.queue(function(){
            $(this).css({
                "background-color": "grey",

            });
            $(this).queue();
        });
        miDiv2.hide(2000);
        miDiv2.show(2000);
        miDiv2.fadeIn(3000);
        miDiv2.fadeOut(3000);
        miDiv2.show(1000, efectoDiv2);
    }

    function efectoDiv3(){
        var miDiv3 = $("#cef_miDiv3");
        miDiv3.fadeIn(2000);
        miDiv3.fadeOut(1000);
        miDiv3.hide(2000);
        miDiv3.show(1000);
        miDiv3.slideToggle(1000, efectoDiv3);
    }

    numeroEfectos();



});
