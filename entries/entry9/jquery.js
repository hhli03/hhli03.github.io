/* code by Tobias Bogliolo
jQuery | Scroll Fix Snippet (sticky nav)
https://codepen.io/tobiasdev/pen/MjPrgd
*/

/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/

var scrollSpeed = 600; //Set here scroll speed (ms).
$(function() {
  $('a[href^="#"]:not([href="#"])').click(function() { //Select only URLs that contain "#myId" (exclude "http://www.sample.com", "sample.html" or "#").
    var target = $(this).attr("href"); //Get sclicked link "href" value.
    var targetPos = $(target).position().top;
    //Animate page to target position:
    $("html, body").animate({
      scrollTop: targetPos
    },scrollSpeed);
    return false; //Prevent page from reload.
  });
});