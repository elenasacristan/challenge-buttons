$(document).ready(function(){

    $('h2').hover(function(){
        $('h2').addClass('lightblue');
    });

    $('#id1').hover(function(){
        $('#id1').addClass('bigger');
        $('#id2').removeClass('bigger');
        $('#id3').removeClass('bigger');
        $('#id4').removeClass('bigger');
        $('#id5').removeClass('bigger');
        $('#id6').removeClass('bigger');
    });

 $('#id2').hover(function(){
        $('#id1').removeClass('bigger');
        $('#id2').addClass('bigger');
        $('#id3').removeClass('bigger');
        $('#id4').removeClass('bigger');
        $('#id5').removeClass('bigger');
        $('#id6').removeClass('bigger');
    });
    
     $('#id3').hover(function(){
        $('#id1').removeClass('bigger');
        $('#id2').removeClass('bigger');
        $('#id3').addClass('bigger');
        $('#id4').removeClass('bigger');
        $('#id5').removeClass('bigger');
        $('#id6').removeClass('bigger');
    });
    
     $('#id4').hover(function(){
        $('#id1').removeClass('bigger');
        $('#id2').removeClass('bigger');
        $('#id3').removeClass('bigger');
        $('#id4').addClass('bigger');
        $('#id5').removeClass('bigger');
        $('#id6').removeClass('bigger');
    });
    
     $('#id5').hover(function(){
        $('#id1').removeClass('bigger');
        $('#id2').removeClass('bigger');
        $('#id3').removeClass('bigger');
        $('#id4').removeClass('bigger');
        $('#id5').addClass('bigger');
        $('#id6').removeClass('bigger');
    });
    
     $('#id6').hover(function(){
        $('#id1').removeClass('bigger');
        $('#id2').removeClass('bigger');
        $('#id3').removeClass('bigger');
        $('#id4').removeClass('bigger');
        $('#id5').removeClass('bigger');
        $('#id6').addClass('bigger');
    });
    
     $('.bottom_button').mouseenter(function(){
        $('body').addClass('black');
    });
    
      $('.bottom_button').mouseleave(function(){
        $('body').addClass('grey');
    });
    
    
});
