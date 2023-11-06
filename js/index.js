$(document).ready(function () {

  let count = 0;


  setInterval(function () {
    count++; 
    count = count % 3; //3이 오는 주기마다 0으로 바꿈
    $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")


  }, 3000)
})


