// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1000,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.svg" alt="left"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.svg" alt="right"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             }
//           ]
//     });
// });
/* >>Slick Slider ^^<< */

const prev = document.querySelector('.slick-prev');
const next = document.querySelector('.slick-next');

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  dots: false,
  navPosition: 'bottom',
  prevButton: prev,
  nextButton: next,
});

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   dots: false,
//   nav: false,
//   controlsText: [
//     '<img src="img/left_arrow.svg" alt="left"></img>',
//     '<img src="img/right_arrow.svg" alt="right"></img>'
//   ]
// });


/* Tiny Slider */