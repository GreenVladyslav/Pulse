/* >>Slick Slider<< */
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.svg" alt="right"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
    });



  /* Tabs */
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleClass(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');

});


/* Tiny Slider */
// const prev = document.querySelector('.slick-prev');
// const next = document.querySelector('.slick-next');

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   dots: false,
//   navPosition: 'bottom',
//   prevButton: prev,
//   nextButton: next,
// });

/* 2variation */
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