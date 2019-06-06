$(document).ready(function(){
    
   ///$('#button1').addClass('makeRed').attr.append("class","makeRed");
   // $('#button1').addClass('makeBorder');
    
    $('button').mouseenter(function(){
       $(this).removeClass('makeRed').addClass('makeBorder'); 
    });
     $('button').mouseleave(function(){
       $(this).removeClass('makeBorder').addClass('makeRed'); 
    });
    
//When the button is clicked, make the paragraph slide up. When clicked again, make 
//it slide down. This effect is a  real-world example of how jQuery can be used on a 
// button or a menu item   
    
   // $('button').click(function(){
//      $('p').slideToggle('medium'); 
//     });
    
// hides/shows paragraphs when either button is clicked

  //  $("button").click(function() {
//		$("p").hide(2000).show(2000);
//	});
   // 
   
   $('#button1').click(function(){
     $('#para1').hide(1000); 
     });
   
   
     $('#button2').click(function(){
     $('#para2').fadeOut(1000).fadeIn(1000); 
     });
     
      $('#button3').click(function(){
     $('#para3').hide(1000); 
     });
   
    
});