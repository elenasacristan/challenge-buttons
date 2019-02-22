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



});
