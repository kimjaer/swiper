$(document).ready(function () {

  let count = 0;

  setInterval(fadeani, 3000)

  function fadeani() { // 선언적 함수
    count++;
    count = count % 3;
// count = count % $(".swiper-slide").lengh;
// $(".swiper-slide").removeClass("on") 쓸 수 있음
    $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
  
  }
})



