$(document).ready(function () {
  //setInterval , animate , css , appendTo(객체 위치 바꾸기/복사기능)
  // setInterval(function(){}, 3000) 
  // $(태그).animate({}, speed, function(){})
  // $(태그).css(스타일, 스타일 값)
  // $(옮길태그).appendTo($(부모가 될 태그))

  const aniw = $(".swiper-slide").height(); // $(".swiper-wraper").css("width"); 랑 같음. css에서 width 값을 가져오란 소리
  
  setInterval(function () {
    $(".swiper-wrapper").animate({ "marginTop": -aniw }, 400,
      function () { 
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper")) 
      $(".swiper-wrapper").css("marginTop",0) 
    })
  }, 3000)
})

