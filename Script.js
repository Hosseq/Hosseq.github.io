"use strict";

$("a").mouseenter(
    function(){
        $(this).animate({
                color: "rgb(218, 218, 218);",
                boxShadow: "0 0 10px black"
            }, 400);}
)

$("a").mouseleave(
    function(){
        $(this).animate({
                color: "white"
            }, 200);}
)

$("#parent div").mouseenter(
    function(){
        $(this).animate({
                backgroundColor: "#a0280a",
                fontSize: "14pt",
            }, 400);}
)

$("#parent div").mouseleave(
    function(){
        $(this).animate({
                backgroundColor: "#b82d0c",
                fontSize: "14pt",
            }, 200);}
)

$(document).ready(function(){
    $("#main").css("margin-top", $(window).height() + 120);
});


$('.bgInf a').on('click', function(e){
    var goto = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(goto).offset().top-150 }, 1000);
    e.preventDefault();
  });


$('#menu a').on('click', function(e){
    var goto = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(goto).offset().top-100 }, 1500);
    e.preventDefault();
  });
