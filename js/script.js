
 
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
jQuery.fn.extend({
    live: function (event, callback) {
       if (this.selector) {            
            jQuery(document).on(event, this.selector, callback);
        }
    }
});
$("#left-nav a").live("click", function(){
  $("#left-nav a").removeClass("current");
  $(this).addClass("current")
});

