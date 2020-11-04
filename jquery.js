$(function () {
    $('.slider').slick({
        infinite: true,  //Слайдер будет бесконечным
        slidesToShow: 6, //Сколько слайдов будет показанно на экране
        slidesToScroll: 1,  //Сколько слайдов переходить        
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 576,  //small
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
              }
            },
            {
                breakpoint: 500,  //small
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
              }
            },
            {
                  breakpoint: 768,  //medium
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                    }
                  },
                  {
                  breakpoint: 992,  //large
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                    }
          },
          {
            breakpoint: 1200,  //extra large
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]
        
    })
})

$(function () {
    $('.card-img').slick({
        infinite: true,  //Слайдер будет бесконечным
        slidesToShow: 1, //Сколько слайдов будет показанно на экране
        slidesToScroll: 1,  //Сколько слайдов переходить        
        // autoplay: true,
        // autoplaySpeed: 3000,
        dots: true,
    })
})