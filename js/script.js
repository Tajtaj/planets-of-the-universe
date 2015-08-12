
 
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

function setActive() {
  aObj = document.getElementById('left-nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='current';
    }
  }
}

window.onload = setActive;

