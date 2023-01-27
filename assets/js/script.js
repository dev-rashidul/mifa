// Sticky Navbar JavaScript

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Hero Slider JavaScript

$('.hero-slider').slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade:true,
  pauseOnHover: false,
  //infinite: true,
  Speed: 800,
  prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});
