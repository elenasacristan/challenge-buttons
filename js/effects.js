// for this example I have changed all <a> tags from the original template to <button> elements
//Make the first button hide when clicked. 
//On the same button, try the slow, medium, fast, and a number in milliseconds (you will need to refresh to get the button back).

$(document).ready(function() {

    $('#first').click(function() {
        $('#first').hide(1000);
       // $('#first').hide('slow');
      //  $('#first').hide('medium');
      //$('#first').hide('fast');
    });


//Use toggle to alter the buttons behaviour.
//When the button is clicked, the paragraph above vanishes.
//When the button is clicked again, the paragraph reappears.

 $('#second').click(function() {
        $('#p2').toggle(1000);
       
    });

 $('#third').mouseenter(function() {
        $('#p3').slideToggle ('slow');
      
    });
    
 //Use fadeTo in conjunction with mouseenter and mouseleave to modify the button.
 //Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave.   
    
    
     $('#fourth').mouseenter(function() {
        $('#fourth').fadeTo(1000,0.5);
      });
      
       $('#fourth').mouseleave(function() {
        $('#fourth').fadeTo(1000,1);
      });
    
    
});
