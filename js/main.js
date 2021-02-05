$(document).ready(function () {

  const FlowersSkider = new Swiper('.flowers__skider', {
    // параметры салйдера
    loop: true,
    slidesPerView: 6,
  
    // Подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Адаптация слайдера
    breakpoints: {
      // Браузер >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // Браузер >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // Браузер >= 1024px
      1024: {
        slidesPerView: 6,
        spaceBetween: 0
      }

    }
  });
  
  const ReviewsSkider = new Swiper('.reviews__skider', {
    // параметры салйдера
    loop: true,
    slidesPerView: 1,
  
    // Подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Выпадающее окно
  $("#reviews-1").on('click', function() {

    $.fancybox.open([
      {
        src  : '..//img/reviews/reviews-1.jpg',
        opts : {
          caption : 'First caption',
          thumb   : '..//img/reviews/reviews-1.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

  // Выпадающее окно
  $("#reviews-2").on('click', function() {

    $.fancybox.open([
      {
        src  : '..//img/reviews/reviews-2.jpg',
        opts : {
          caption : 'First caption',
          thumb   : '..//img/reviews/reviews-2.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

  // Выпадающее окно
  $("#reviews-3").on('click', function() {

    $.fancybox.open([
      {
        src  : '..//img/reviews/reviews-3.jpg',
        opts : {
          caption : 'First caption',
          thumb   : '..//img/reviews/reviews-3.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});