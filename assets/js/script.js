// Sticky Navbar JavaScript

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Hero Slider JavaScript

$(".hero-slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  pauseOnHover: false,
  //infinite: true,
  Speed: 800,
  prevArrow:
    '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Sponsor Slider JavaScript

$(".sponsor-slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow:
    '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Home Event Slider JavaScript

$(".home-event-slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  pauseOnHover: false,
  //infinite: true,
  Speed: 800,
  prevArrow:
    '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Mamanets Players Slider JavaScript

$(".mamanets-players-slider").slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow:
    '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});


// Similar Events Slider JavaScript

$(".similar-events-slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow:
    '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});
