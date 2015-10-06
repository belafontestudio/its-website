

$(document).ready(function() {
  $(".drawer").drawer();

  $(".menu-web").sticky({topSpacing:0});


  $('.cosa').click(function(e){
    e.preventDefault();
    $(window).scrollTo($('#cosa-sono'), 800);
  });
  $('.aree').click(function(e){
    e.preventDefault();
    $(window).scrollTo($('#aree-formative'), 800);
  });
  $('.inp').click(function(e){
    e.preventDefault();
    $(window).scrollTo($('#in-piemonte'), 800);
  });
  $('.offerta').click(function(e){
    e.preventDefault();
    $(window).scrollTo($('#in-italia'), 800);
  });
  $('.contatti').click(function(e){
    e.preventDefault();
    $(window).scrollTo($('#footer'), 800);
  });






});
