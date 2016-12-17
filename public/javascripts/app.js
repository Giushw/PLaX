/*
* Function FadeManager
* gestisce il fadeIn del testo verticale
*/
function FadeManager() {
    $(".FadeI15").fadeIn(1500);
    $(".FadeI16").fadeIn(1600);
    $(".FadeI17").fadeIn(1700);
    $(".FadeI18").fadeIn(1800);
    $(".FadeI19").fadeIn(1900);
    $(".FadeI20").fadeIn(2000);
    $(".FadeI21").fadeIn(2100);
    $(".FadeI22").fadeIn(2200);
    $(".FadeI23").fadeIn(2300);
    $(".FadeI24").fadeIn(2400);
    $(".FadeI25").fadeIn(2500);
    $(".FadeI26").fadeIn(2600);
    $(".FadeI27").fadeIn(2700);
    $(".FadeI28").fadeIn(2800);
    $(".FadeI29").fadeIn(2900);
    $(".FadeI30").fadeIn(3000);
    $(".FadeI31").fadeIn(3100);
    $(".FadeI30").fadeIn(3000);
    $(".FadeI31").fadeIn(3100);
    $(".FadeI32").fadeIn(3200);
    $(".FadeI33").fadeIn(3300);
    $(".FadeI34").fadeIn(3400);
    $(".FadeI35").fadeIn(3500);
    $(".FadeI36").fadeIn(3600);
    $(".FadeI37").fadeIn(3700);
    $(".FadeI38").fadeIn(3800);
    $(".FadeI39").fadeIn(3900);
    $(".FadeI40").fadeIn(4000);
    $(".FadeI41").fadeIn(4100);
    $(".FadeI42").fadeIn(4200);
    $(".FadeI43").fadeIn(4300);
    $(".FadeI44").fadeIn(4400);
    $(".FadeI45").fadeIn(4500);
    $(".FadeI46").fadeIn(4600);
}
/**
* Function MovingMenu
* gestisce l'animazione del menu in home
*/
function MovingMenu() {
$("#objWhiteHomeLavori").toggleClass("left");
$("#Lavori").toggleClass("leftA");
$("#objWhiteHomeBackstage").toggleClass("left");
$("#Backstage").toggleClass("leftB");
$("#objWhiteHomeContatti").toggleClass("left");
$("#Contatti").toggleClass("leftC");
$("#btndropdownhome").toggleClass("rotbtn");
}
/**
* Event Click sul Dropdown
*/
$("#btndropdownhome").click (function(){
$(".Hid").toggle();
FadeManager();
MovingMenu();
});
/**
* Ready state
* Gestione elementi in caricamento pagina
*/
$(document).ready(function () {
    $(".Hid").hide();
    FadeManager();
});
