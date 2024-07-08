window.onload = function (){
    const promotion = new Swiper(".promotion" , {
        // 프로모션 영역
        
        slidesPerView: 1,
        spaceBetween : 10,
        breakpoints : {
            480:{
                slidesPerView: 2,   
            },
            768:{
                slidesPerView: 3,
            },
            1200:{
                slidesPerView: 4,
            },
        },
    });     
   
    // 이벤트 영역
        const event = new Swiper(".event", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
slidesPerView: 2,
spaceBetween: 10,
breakpoints : {
    768:{
        slidesPerView:3,
    },
    368:{
        slidesPerView:2,
    },
   },
},

        )}
    
    // 모바일 2개
    // 웹 3개
    // 60%

