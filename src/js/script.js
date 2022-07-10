/* Slick Slider */
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
                arrows: false,
              }
            },
            {
              breakpoint: 575,
              settings: {
                verticalSwiping: false,
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

 /*  Modal */

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $(window).on('click', function(e) {
    if (e.target.classList.contains('overlay')) {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });

  /* Valid form */

	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				},
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символов")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свой почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');

	/* maskedinput */

	$("input[name=phone]").mask("+38(099) 999-99-99");

  /* Forms */

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

  /* Smooth scroll and pageup */

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });


  $("a[href^='#up']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 400);
    return false;
  });

  new WOW().init();
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