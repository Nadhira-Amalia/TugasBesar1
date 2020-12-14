// scroll
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active')
  menu.classList.toggle('active')
}

// slide
$(".slider").owlCarousel({
loop: true,
autoplay: true,
autoplayTimeout: 2000, //2000ms = 2s;
autoplayHoverPause: true,
});
