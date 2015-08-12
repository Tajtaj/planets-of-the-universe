
 
$(function(){
 
$(document).on( 'scroll', function(){
 
if ($(window).scrollTop() > 100) {
$('.scroll-top-wrapper').addClass('show');
} else {
$('.scroll-top-wrapper').removeClass('show');
}
});
 
$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
element = $('body');
offset = element.offset();
offsetTop = offset.top;
$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

// Adding active class
$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $(".leftpanel a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("current");
     })
});
