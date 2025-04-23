function FadeInAnimeControl(trigger,add,y) {
  $(trigger).each(function(){ 
      var elemPos = $(this).offset().top + y;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass(add);
    }
  });
}
$(window).scroll(
  function () {
    FadeInAnimeControl('.fadeInTrigger','fade-in',300);
    FadeInAnimeControl('.fadeLeftTrigger','fade-left',300);
    FadeInAnimeControl('.fadeRightTrigger','fade-right',300);
    FadeInAnimeControl('.JumpUpTrigger','anime-JumpUp',0);
  }
);

function moveAnimation(){
  var randomElm = $(".randomBox");
  var randomElmChild = $(randomElm).children();
  if(!$(randomElm).hasClass("play")){
    randomAnime();
  }
  function randomAnime(){
    $(randomElm).addClass("play");
    var rnd = Math.floor(Math.random() * randomElmChild.length);
    var moveData = "anime-JumpUp";
    $(randomElmChild[rnd]).addClass(moveData);
    randomElmChild.splice(rnd,1);
    if(randomElmChild.length == 0){
      $(randomElm).removeClass("play");
    }else{
      setTimeout(function(){randomAnime();},500);
    }
  }

  var randomElm2 = $(".randomScroll")
  var randomElm2Child = $(randomElm2).children();
  randomScrollAnime();

  function randomScrollAnime(){
    var elemPos = $(".randomScroll").get(0).offsetTop; - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      if(randomElm2Child.length > 0){
        var rnd = Math.floor(Math.random() * randomElm2Child.length);
        var moveData = "anime-JumpUp";
        if(animeFlag){
          animeFlag = false;
          $(randomElm2Child[rnd]).addClass(moveData);
          setTimeout(function(){
            animeFlag = true;
            randomAnime();
          },500);
          randomElm2Child.splice(rnd,1);
        }
      }
    }else{
      animeFlag = true;
    }
  }
}

var animeFlag = true;

$(window).scroll(function(){
  moveAnimation();
})