$(document).ready(function(){
    $portText = $('.portafolio p').hide();
    $portafolios = $('.portafolio').hover(function(e){
        $(e.target).children('p').fadeIn();
    },
    function(e){
        $(e.target).children('p').fadeOut();
    });
});
