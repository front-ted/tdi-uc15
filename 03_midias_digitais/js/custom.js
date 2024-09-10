var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}

$(".menu label.menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});



$(".icone-menu").click(function(){
    window.scrollTo({
        top: 580,
        behavior: 'smooth'
    });
});


//-------- DATA E HORA --------\\

function dataHora(){

    var data = new Date();

    var h = data.getHours() <= 9 ? "0"+data.getHours() : data.getHours();
    var m = data.getMinutes() <= 9 ? "0"+data.getMinutes() : data.getMinutes();
    var s = data.getSeconds() <= 9 ? "0"+data.getSeconds() : data.getSeconds();
    var hora = h+":"+m;
    var horaCerta = hora.toLocaleString();

    nomeSemana = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    var diaSemana = nomeSemana[data.getDay()];

    nomeMes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    var mes = nomeMes[data.getMonth()];

    var dia = data.getDate()

    document.getElementById('data-hora').innerHTML = horaCerta+"&nbsp;&nbsp;&nbsp;&nbsp;"+diaSemana+", "+dia+" de "+mes;

    setTimeout('dataHora()',500);
};

//-------- FIM DATA E HORA --------\\


//-------- BATERIA IPAD --------\\

$(document).ready(function () {
    
    var bateria = 100;
    document.getElementById('nivel-bateria').innerHTML = bateria+"%";

    $("#carga-bateria").addClass("fa-battery-full");

    setInterval(() => {

        if(bateria <= 0){
            bateria = 0;
        }else{
            bateria = bateria - 1;
        }

        if(bateria >= 76){
            $("#carga-bateria").addClass("fa-battery-full");
        }else if(bateria > 50 && bateria <= 75){
            $("#carga-bateria").removeClass("fa-battery-full");
            $("#carga-bateria").addClass("fa-battery-three-quarters");
        }else if(bateria > 25 && bateria <= 50){
            $("#carga-bateria").removeClass("fa-battery-three-quarters");
            $("#carga-bateria").addClass("fa-battery-half");
        }else if(bateria > 10 && bateria <= 25){
            $("#carga-bateria").removeClass("fa-battery-half");
            $("#carga-bateria").addClass("fa-battery-quarter");
        }else if(bateria <= 10){
            $("#carga-bateria").removeClass("fa-battery-quarter");
            $("#carga-bateria").addClass("fa-battery-empty");
        }else{
            $("#carga-bateria").addClass("fa-battery-empty");
        }

        if(bateria <= 15){
            $("#carga-bateria").css("color","#e84c3f");
        }

        document.getElementById('nivel-bateria').innerHTML = bateria+"%";

    }, 60000)

});

//-------- FIM BATERIA IPAD --------\\


/*
jQuery("document").ready(function($){

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  
    if(pg_number == 1){
      document.body.style.backgroundImage = "url('objetos/bg01.png')";
    }else if(pg_number == 2){
      document.body.style.backgroundImage = "url('objetos/bg02.png')";
    }
    
});
*/