/*! toolbox - v0.1.0 - 2012-05-09
* http://www.digitalbungalow.com/
* Copyright (c) 2012 Ryan Struhl; Licensed MIT *///File: Script.js
//Site specific javascript goes here
//Demo Code/////////////////////////
var $=window.$;$(function(){var a=function(){var b=$(".block_test div");b.each(function(a){var b=$(this),c=b.width()+"px";b.attr("title",c)})};a();$(window).resize(function(){a()});window.prettyPrint&&$(".prettyprint").length>0&&window.yepnope({load:"libs/google-code-prettify/prettify.css",callback:function(){window.prettyPrint()}})});