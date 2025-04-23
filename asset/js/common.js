// インクルード
$(function () {
  // $(".headerarea").load("asset/include/header.html", function (data) { });
  // $(".footerarea").load("asset/include/footer.html", function (data) { });
  // $(".fat-nav").load("asset/include/fat-nav.html", function (data) { });
});

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// 追従するヘッダーがある場合のスムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var header = $('header').height();
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// 	fatnav
$(function() {
    $.fatNav();
});

// ページトップボタン
$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();
  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + scrollTop;
    footHeight = $("footer").innerHeight();
    if(scrollTop>200 && scrollHeight - scrollPosition >= footHeight){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    } 
  }
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});

// リキッドフォント
function clampBuilderPx( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {

  const minWidth = minWidthPx;
  const maxWidth = maxWidthPx;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp( ${ minFontSize }px, ${ yAxisIntersection }px + ${ slope * 100 }vw, ${ maxFontSize }px )`;
}
window.addEventListener('DOMContentLoaded', function() {
  var viewport_s = 375;
  var viewport_w = 1440;
  var sp_mag = 1 - (viewport_s / viewport_w);

  
  $('.js-lqFnts').each(function(){
    var fnts = $(this);
    var object_l = parseInt(fnts.css('font-size'));
    var object_s = parseInt(object_l) * sp_mag;
  
    fnts.css('font-size', clampBuilderPx(viewport_s,viewport_w,object_s,object_l));
  });
});

//カスタムvw
const setVw = function() {
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);

// カスタムvh
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);

// レスポンシブ対応のjs
var mql = window.matchMedia('screen and (max-width: 1200px)');
function checkBreakPoint(mql) {
  if (mql.matches) {
    ////////////////////////////////////////////// 
    // 767以下
    //////////////////////////////////////////////
    $(function(){
      var height = $('.g-news__list').innerHeight() + 10;
      $('aside').css('margin-top',height);
    });
  } else {
    ////////////////////////////////////////////// 
    // 768以上
    //////////////////////////////////////////////
    $(function(){
      var height = $('.g-news__section').innerHeight() - 10;
      $('aside').css('margin-top',height);
    });
  }
}

// ブレイクポイントの瞬間に発火
mql.addListener(checkBreakPoint);

// 初回チェック
checkBreakPoint(mql);


$(function(){
  // hamburger-psの中にハンバーガーを移動
  // ハンバーガークリックしたらft-hamburger-psの中に移動、もう一回クリクしたらhamburger-psに戻す
  $(".hamburger").on("click", function() {
  if($('.fat-nav').hasClass("active")){
  $('.hamburger').addClass('fixed');
  $('.ft-hamburger-ps').append($('.hamburger'));
  }else{
  $('.hamburger').removeClass('fixed');
  $('.hamburger-ps').append($('.hamburger'));
  }
  });
  });
  
  // スクロールしたら
  $(function() {
  $(window).on('load scroll', function() {
  var scrollPos = $(this).scrollTop();
  if ( scrollPos > 300 ) {
  $('body').addClass('scroll');
  } else {
  $('body').removeClass('scroll');
  }
  });
  });

// ページの画像を読み込んだら処理を実行
$(window).on('load', function() {
  let allImages = document.images;
  let totalImages = allImages.length;
  let loadedImages = 0;

  if (totalImages === 0) {
      // 画像がない場合、直接関数を実行
      executeAfterImagesLoaded();
  } else {
      for (let img of allImages) {
          if (img.complete) {
              loadedImages++;
          } else {
              img.onload = function() {
                  loadedImages++;
                  if (loadedImages === totalImages) {
                      executeAfterImagesLoaded();
                  }
              }
          }
      }
  }

  function executeAfterImagesLoaded() {
    // 画像がすべて読み込まれた後の処理

  }
});
// loading="lazy"対応
$(document).ready(function() {
  // すべての画像が読み込まれたら処理を実行
  $(window).on('load', function() {
      let allImages = document.querySelectorAll('img:not([loading="lazy"])'); // lazy loadingの画像を除外
      let totalImages = allImages.length;
      let loadedImages = 0;

      if (totalImages === 0) {
          executeAfterImagesLoaded();
      } else {
          for (let img of allImages) {
              if (img.complete) {
                  loadedImages++;
                  if (loadedImages === totalImages) {
                      executeAfterImagesLoaded();
                  }
              } else {
                  img.onload = function() {
                      loadedImages++;
                      if (loadedImages === totalImages) {
                          executeAfterImagesLoaded();
                      }
                  }
              }
          }
      }
  });

  function executeAfterImagesLoaded() {

  }
});
