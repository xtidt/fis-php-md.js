define("mod/bar.js",function(n,e,o){o.exports=function(n){return $(n)}});
;define("mod/foo.js",function(o,n,s){var c=o("mod/bar.js");s.exports=function(o,n){c(o).css("color",n)}});