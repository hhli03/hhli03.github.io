// try playing with this ALERT - 
// $(document).ready(function() {alert("[hello! Welcome to my world!]"); })

// JS files comment with two backslash lines 
$(document).ready(function() {$("#ufo").draggable(); })
$(document).ready(function() {
    $("#bananas").hover(function(){
     $("#ufo").show(); }); })
    
$(document).ready(function() {
$("#cat").click(function(){
$("#grapes").toggle(); }); 
})

$(document).ready(function() {
    $("#ufo").hover(function(){
    $(this).hide();
     }); 
    })

$(document).ready(function() {
$("#diamond").hover(function(){
      $("#earthling").css("color", "red");
  	 });
})

$(document).ready(function()  {
    $("#diamond").hover(function(){
          $("#earthling").append(" we come in peach");
           });
     
    })

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(1000);
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
    
$(document).ready(function() {$("#cat").draggable(); })

$(document).ready(function() {$("#grapes").draggable(); })

$(document).ready(function() {$("#diamond").draggable(); })
$(document).ready(function() {$("#flower").draggable(); })
