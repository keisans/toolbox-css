//File: Script.js
//Site specific javascript goes here
//Demo Code/////////////////////////
$(function(){var a=function(){var b=$(".block_test div");b.each(function(a){var b=$(this),c=b.width()+"px";b.attr("title",c)})};a();$(window).resize(function(){a()})});