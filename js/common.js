$(function () {

  /*设置根元素 html字体大小*/
  (function () {
    var deviceWidth = $('html').width();
    if (deviceWidth > 750) {
      deviceWidth = 750;
    }
    $('html').css("font-size", deviceWidth / 7.5 + 'px');
  })();

  /*loading效果*/
  (function () {
    circleProgress({
      id: 'circle-progress',
      progress: 100, // default: 100
      duration: 3000, // default: 1000
      color: '#FF6666', // default: 'rgb(230, 230, 230)'
      textColor: 'FF6666', // default: 'black'
      progressWidth: 0.11, // default: 0.25 (r)
      fontScale: 0.5, // default: 0.4 (r)
    });
    window.setTimeout(function () {
      $("#page1").slideUp(1000);
      $("#swip").show();
    }, 3100)
  })();

  /*播放音乐控制及动画*/
  var media = document.getElementById('bgsound');
  $("#btn-music").click(function () {
    $(this).toggleClass("music-off");
    if (media.paused) {
      media.play();
      $(this).css("animation-play-state", "paused");
    } else {
      media.pause();
      $(this).css("animation-play-state", "running");
    }
  });

  /*滑动手势操作*/
  (function () {
    var nowpage = 0;

    //给最大的盒子增加事件监听
    $(".touch").swipe({
      swipe: function (event, direction, distance, duration, fingerCount) {
        if (direction == "up") {
          if (index < end) {
            next();
          }
        } else if (direction == "down") {
          prev();
        }
        /*if (direction == "left") {
        } else if (direction == "right") {
         
        }*/
      }
    });
  })();
  /*翻页效果*/
  var start = 2;
  var end = 7;
  var index = start;

  function next() {
    $("#page" + index).slideUp(1000);
    index++;
    if (index > end) {
      index = end;

    }
    if (index == end) {
      $("#swip").hide();
    }
  }

  function prev() {
    index--;
    if (index < start) {
      index = start;
    }
    $("#page" + index).slideDown(1000);
    if (index == end - 1) {
      $("#swip").show();
    }
  }

  /*分享按钮动作*/
  $("#btn-share").click(function () {
    $(".s-pop").show();
  });
});