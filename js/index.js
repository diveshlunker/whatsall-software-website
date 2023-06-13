document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 900){
    jQuery('#main-nav').addClass('navbar-fixed-top');
  } else {
    jQuery('#main-nav').removeClass('navbar-fixed-top');
  }
});
