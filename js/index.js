$(document).ready(function () {
  //setInterval , animate , css , appendTo(객체 위치 바꾸기/복사기능)
  // setInterval(function(){}, 3000) 
  // $(태그).animate({}, speed, function(){})
  // $(태그).css(스타일, 스타일 값)
  // $(옮길태그).appendTo($(부모가 될 태그))

  let count = 0;

  setInterval(fadeani, 3000)

  function fadeani() { // 선언적 함수
    count++;
    count = count % 3; //3이 오는 주기마다 0으로 바꿈
    $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
  
  }
})

