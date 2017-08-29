var deleteLog = false;

$(function() {
  // if ((/msie [6|7|8]/i.test(navigator.userAgent))){
  // $('body').addClass('isitie');
  // };
  var timer1 = setInterval(function() {
    if (document.readyState == "complete") {
      /***取消滑动限制***/
        // function move(){
        // document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",window.mo,false);
      //}
      $(".load").hide();
      $(".pagebox071-box-row").show();
      srollpage();
      clearInterval(timer1);
    }
  }, 1000);
  function srollpage() {
    $("#thispage").pagepiling({
      anchors: [
        "page1",
        "page2",
        "page3",
        "page4",
        "page5",
        "page6",
        "page7",
        "page8",
        "page9",
        "page10",
        "page11",
        "page12",
        "page13",
        "page14",
        "page15",
        "page16"
      ],
      menu: "#menu",
      normalScrollElements: ".pagebox16-wrapper",
      normalScrollElementTouchThreshold: 5,
      // navigation: true,
      // navigationTooltips:["主页","相册","说说","留言板"],
      // easing:,
      afterRender: function() {
        $(".pagebox01-txt01").velocity(
          { opacity: 1, top: "14.5246478%" },
          { duration: 1000, easing: "swing", delay: 0 }
        );
        $(".p01-bottom-txt01").velocity(
          { opacity: 1, top: 0 },
          { duration: 1000, easing: "swing", delay: 0 }
        );
        $(".p01-bottom-txt02").velocity(
          { opacity: 1, top: 0 },
          { duration: 1000, easing: "swing", delay: 300 }
        );
        $(".p01-bottom-btn").velocity(
          { opacity: 1, top: 0 },
          { duration: 1000, easing: "swing", delay: 500 }
        );
      },
      afterLoad: function(anchorLink, index) {
        $(".page-menu-close").trigger("click");
        $(".pop-close").trigger("click");
        // $('.pagebox07-box').hide();
        if (index == 1) {
          $(".pagebox01-txt01").velocity(
            { opacity: 1, top: "14.5246478%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".p01-bottom-txt01").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".p01-bottom-txt02").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 300 }
          );
          $(".p01-bottom-btn").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 500 }
          );
        }
        if (index == 2) {
          $(".pagebox02-txt01").velocity(
            { opacity: 1, right: "5.671875%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox02-txt02").velocity(
            { opacity: 1, left: "26.875%" },
            { duration: 1000, easing: "swing", delay: 100 }
          );
        }
        if (index == 3) {
          $(".pagebox03-txt01").velocity(
            { opacity: 1, right: "35.67188%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 4) {
          $(".pagebox04-txt01").velocity(
            { opacity: 1, left: "14.375%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox04-txt02").velocity(
            { opacity: 1, right: "0" },
            { duration: 1000, easing: "swing", delay: 100 }
          );
        }
        if (index == 5) {
          $(".pagebox05-txt01").velocity(
            { opacity: 1, left: "29.15625%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox05-txt02").velocity(
            { opacity: 1, right: "5.671875%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 6) {
          $(".pagebox06-txt01").velocity(
            { opacity: 1, right: "30.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }

        if (index == 7) {
          $(".pagebox07-txt01").velocity(
            { opacity: 1, top: "11.8838%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }

        if (index == 8) {
          console.log(111);
          $(".pagebox08-txt01").velocity(
            { opacity: 1, right: "8.984375%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox08-txt02").velocity(
            { opacity: 1, right: "13.67188%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          // $('.pagebox07-box').show();
          // $(".pagebox07-box-row").velocity(
          //   { top: "0" },
          //   { duration: 300, easing: "swing", delay: 0 }
          // );
          // $(".pagebox07-box").velocity(
          //   { opacity: 1, top: "90px;" },
          //   { duration: 1000, easing: "swing", delay: 0 }
          // );
        }
        if (index == 11) {
          console.log(111);
          $(".pagebox11-txt01").velocity(
            { opacity: 1, right: "8.984375%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox11-txt02").velocity(
            { opacity: 1, right: "13.67188%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 9) {
          $(".pagebox09-txt01").velocity(
            { opacity: 1, right: "34.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 10) {
          $(".pagebox10-txt01").velocity(
            { opacity: 1, right: "30.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 12) {
          $(".pagebox12-txt01").velocity(
            { opacity: 1, right: "30.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 13) {
          $(".pagebox13-txt01").velocity(
            { opacity: 1, right: "30.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 14) {
          $(".pagebox14-txt01").velocity(
            { opacity: 1, bottom: "74.83125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 15) {
          $(".pagebox15-txt01").velocity(
            { opacity: 1, right: "3.03125%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
      },
      onLeave: function(index, direction) {
        //滚动前的回调函数
        $(".win-pop-bg").trigger("click");
        $(".pop-close").trigger("click");
        $(".page-menu-close").trigger("click");
        // $('.pagebox07-box').hide();

        if (index == "1") {
          $(".bottom-pop-form").addClass("hide");
          $(".pagebox01-txt01").attr("style", "");
          $(".p01-bottom-txt01").attr("style", "");
          $(".p01-bottom-txt02").attr("style", "");
          $(".p01-bottom-btn").attr("style", "");
        }
        if (index == 2) {
          $(".pagebox02-txt01").attr("style", "");
          $(".pagebox02-txt02").attr("style", "");
        }
        if (index == "3") {
          $(".pagebox03-txt01").attr("style", "");
        }
        if (index == "4") {
          $(".pagebox04-txt01").attr("style", "");
          $(".pagebox04-txt02").attr("style", "");
        }
        if (index == "5") {
          $(".pagebox05-txt01").attr("style", "");
        }
        if (index == "6") {
          $(".pagebox06-txt01").attr("style", "");
        }
        if (index == "7") {
          $(".pagebox08-txt01").attr("style", "");
        }
        if (index == "8") {
          $(".pagebox08-txt01").attr("style", "");
          $(".pagebox08-txt02").attr("style", "");
        }
        if (index == "9") {
          $(".pagebox09-txt01").attr("style", "");
        }
        if (index == "10") {
          $(".pagebox10-txt01").attr("style", "");
        }
        if (index == "11") {
          $(".pagebox11-txt01").attr("style", "");
        }
        if (index == "12") {
          $(".pagebox12-txt01").attr("style", "");
        }
        if (index == "13") {
          $(".pagebox13-txt01").attr("style", "");
        }
        if (index == "14") {
          $(".pagebox14-txt01").attr("style", "");
        }
        if (index == "15") {
          $(".pagebox15-txt01").attr("style", "");
        }
      }
    });
  }

  // $.fn.pagepiling.setAllowScrolling(false);

  $(window).resize(function() {
    autoScrolling();
  });
  function autoScrolling() {
    var $ww = $(window).width();
    var $hh = $(window).height();
    if ($ww < 1024) {
      //$.fn.fullpage.setAutoScrolling(false);
    } else {
      //$.fn.fullpage.setAutoScrolling(true);
    }
    if ($hh / $ww > 1136 / 640) {
      $("body").addClass("big-vertical");
    } else {
      $("body").removeClass("big-vertical");
    }
  }
  autoScrolling();

  $(
    ".pagebox03-swiper01, .pagebox03-swiper02, .pagebox04-swiper02, .pagebox05-swiper02,.pagebox06-swiper01, .pagebox06-swiper02, .pagebox07-swiper01, .pagebox07-swiper02,.pagebox07-body-item, .pagebox09-swiper01, .pagebox09-swiper02,.pagebox10-swiper01, .pagebox10-swiper02,.pagebox12-swiper01, .pagebox12-swiper02,.pagebox13-swiper01, .pagebox13-swiper02,.pagebox14-swiper01, .pagebox14-swiper02"
  ).mousedown(function(event) {
    event.stopPropagation();
  });

  $(document)
    .on("click", ".pop-close", function() {
      $(this).parents(".popbox").hide().attr("style", "");
      $(".win-pop-bg").hide();
      $(".win-pop-bg").attr("class", "win-pop-bg");
      $(".section").removeClass("bgshow"); //1212
    })
    .on("click", ".win-pop-bg", function() {
      $(".popbox").hide().attr("style", "");
      $(".win-pop-bg").hide();
      $(".win-pop-bg").attr("class", "win-pop-bg");
    });
  function popshow(this_pop) {
    var this_w = this_pop.width();
    var this_h = this_pop.height();
    this_pop.css({
      visibility: "visible",
      "margin-left": -this_w / 2 + "px",
      marginTop: -this_h / 2 + "px"
    });
    this_pop.stop().animate({ top: "50%" }, 800, "easeOutExpo");
    $(".win-pop-bg").delay("800").show();
  }

  $(".btn-shijian").on("click", function() {
    $(".page-menu-close").trigger("click");
    $(".bottom-pop-form").removeClass("hide");
    $(".bottom-pop-form").velocity(
      { opacity: 1, bottom: "0" },
      { duration: 300, easing: "swing", delay: 0 }
    );
    // $('.win-pop-bg').delay('800').show();
  });
  $(".yuyuelogo-img").on("click", function() {
    $(".btn-shijian").trigger("click");
  });

  $(".menu-img").on("click", function() {
    // $('.page-menu').removeClass('hide');
    var menu = $(".page-menu");
    if ($(".page-menu").hasClass("show")) {
      $(".page-menu-close").trigger("click");
      return;
    } else {
      $(".page-menu")
        .addClass("show")
        .css({
          display: 'block'
        })
        .velocity(
          { opacity: 1, right: "0" },
          { duration: 300, easing: "swing", delay: 0 }
        );
    }
    // $('.win-pop-bg').delay('800').show();
  });
  $(".page-menu-close").on("click", function() {
    $(".page-menu")
      .removeClass("show")
      .css({
          display: 'none'
      })
      .velocity(
        { opacity: 0, right: "0" },
        { duration: 300, easing: "swing", delay: 0 }
      );
  });

  $(".btn-v").on("click", function() {
    $(".pop-v-box").show();
    $(".win-pop-bg").delay("800").show();
  });

  $(
    document
  ).on(
    "click",
    ".pagebox04-swiper02 .swiper-slide, .pagebox05-swiper02 .swiper-slide",
    function() {
      var $this = $(this);
      var $this_pop = $(".pop-img-box");
      var $imgurl = $this.data("imgurl");
      var $this_tit = $this.data("tit");
      var this_w = $this_pop.width();
      var this_h = $this_pop.height();
      var $pop_html =
        '<img class="pop-img" src="' +
        $imgurl +
        '" alt=""><p class="poptit">' +
        $this_tit +
        "</p>";
      $this_pop.find(".win-pop-show").html($pop_html);

      $this_pop.css({ visibility: "visible" });
      $this_pop.stop().animate({ top: "45%" }, 800, "easeOutExpo");
      $this_pop.show();

      $this.parents(".section").addClass("bgshow"); //1212
      // $('.win-pop-bg').delay('800').show();
    }
  );

  //page1
  $(".bottom-box-right .a3").on("click", function() {
    $(".bottom-pop-form").toggleClass("hide");
  });
  $(".bottom-pop-form .pop-close").on("click", function() {
    $(".bottom-pop-form").addClass("hide");
  });

  //page3
  var mySwiper = new Swiper(".pagebox03-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper2.swipeTo(mySwiper.activeIndex);
      $(".pagebox03-swiper02 .swiper-slide")
        .eq(mySwiper.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper2 = new Swiper(".pagebox03-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox03-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper2.swipePrev();
  });
  $(".pagebox03-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper2.swipeNext();
  });
  $(".pagebox03-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper2.swipeTo($(this).index());
    mySwiper.swipeTo($(this).index());
  });
  function page3_resize() {
    // var this_h = $('.pagebox03-swiper01').width() * 0.5944741532976827;
    // $('.pagebox03-swiper01 .swiper-container').height( this_h );
    // $('.pagebox03-swiper01').css('margin-left', - $('.pagebox03-swiper01').width()/2 + 'px');
    // $('.pagebox03-swiper01').css('margin-top', - this_h/2 + 'px');
  }

  //page4

  var mySwiper4_1 = new Swiper(".pagebox04-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox04-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper4_1.swipePrev();
  });
  $(".pagebox04-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper4_1.swipeNext();
  });
  $(".pagebox04-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    $(this).addClass("current").siblings().removeClass("current");
  });

  $(document).on("click", ".pagebox04 .link-a", function() {
    var $this = $(this);
    var $this_pop = $(".pagebox04-pop");
    var $imgurl = $this.data("imgurl");
    var $this_tit = $this.data("tit");
    var this_w = $this_pop.width();
    var this_h = $this_pop.height();
    var $pop_html =
      '<img class="img-responsive" src="' +
      $imgurl +
      '" alt=""><p class="poptit">' +
      $this_tit +
      "</p>";
    $this_pop.find(".win-pop-show").html($pop_html);

    $this_pop.css({
      visibility: "visible",
      "margin-left": -this_w / 2 + "px",
      marginTop: -this_h / 2 + "px"
    });
    $this_pop.stop().animate({ top: "50%" }, 800, "easeOutExpo");
    $(".win-pop-bg").delay("800").show();
  });
  function page4_resize() {
    var $this = $(".pagebox04 .link-a-group");
    if ($("body").hasClass("big-vertical")) {
      $this.css("margin-left", -$this.width() / 2 + "px");
      $this.css("margin-top", -$this.height() / 2 + "px");
    } else {
      $this.css("margin-top", -$this.height() / 2 + "px");
    }
  }

  //page5
  var mySwiper5_1 = new Swiper(".pagebox05-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox05-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper5_1.swipePrev();
  });
  $(".pagebox05-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper5_1.swipeNext();
  });
  $(".pagebox05-swiper02 .swiper-slide").on("click", function(e) {
    $(this).addClass("current").siblings().removeClass("current");
  });

  $(document).on("click", ".pagebox05 .link-a", function() {
    var $this = $(this);
    var $this_index = $this.data("index");
    var $this_pop = $(".pagebox05-pop");
    $(".win-pop-bg").addClass("pagebox05-bg");

    $this_pop.find(".swiper-container").height();

    var this_w = $this_pop.width();
    var this_h = $this_pop.height();

    $this_pop.css({
      visibility: "visible",
      "margin-left": -this_w / 2 + "px",
      marginTop: -this_h / 2 + "px"
    });
    $this_pop.stop().animate({ top: "50%" }, 800, "easeOutExpo");
    $(".win-pop-bg").delay("800").show();

    // var mySwiper5 = new Swiper(".pagebox05-swiper01 .swiper-container", {
    //   loop: true,
    //   slidesPerView: 1,
    //   resizeReInit: true,
    //   calculateHeight: true
    // });
    // $(".pagebox05-swiper01 .arrow-left").on("click", function(e) {
    //   e.preventDefault();
    //   mySwiper5.swipePrev();
    // });
    // $(".pagebox05-swiper01 .arrow-right").on("click", function(e) {
    //   e.preventDefault();
    //   mySwiper5.swipeNext();
    // });
  });
  function page5_resize() {
    var $this = $(".pagebox05 .link-a-group");
    if ($("body").hasClass("big-vertical")) {
      $this.css("margin-left", -$this.width() / 2 + "px");
      $this.css("margin-top", -$this.height() / 2 + "px");
    } else {
      $this.css("margin-top", -$this.height() / 2 + "px");
    }
  }

  //page6
  // var mySwiper6_1 = new Swiper(".pagebox06-swiper02 .swiper-container", {
  //   // loop : true,
  //   slidesPerView: 3,
  //   resizeReInit: true,
  //   height: 150
  //   // cssWidthAndHeight : true,
  // });
  // $(".pagebox06-swiper02 .arrow-left").on("click", function(e) {
  //   e.preventDefault();
  //   mySwiper6_1.swipePrev();
  // });
  // $(".pagebox06-swiper02 .arrow-right").on("click", function(e) {
  //   e.preventDefault();
  //   mySwiper6_1.swipeNext();
  // });
  // $(".pagebox06-swiper02 .swiper-slide").on("click", function(e) {
  //   $(this).addClass("current").siblings().removeClass("current");
  // });
  //
  var mySwiper6 = new Swiper(".pagebox06-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper62.swipeTo(mySwiper6.activeIndex);
      $(".pagebox06-swiper02 .swiper-slide")
        .eq(mySwiper6.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper62 = new Swiper(".pagebox06-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox06-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper62.swipePrev();
  });
  $(".pagebox06-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper62.swipeNext();
  });
  $(".pagebox06-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper62.swipeTo($(this).index());
    mySwiper6.swipeTo($(this).index());
  });
  function page6_resize() {}

  //page7
  var mySwiper7 = new Swiper(".pagebox07-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper72.swipeTo(mySwiper7.activeIndex);
      $(".pagebox07-swiper02 .swiper-slide")
        .eq(mySwiper7.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper72 = new Swiper(".pagebox07-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox07-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper72.swipePrev();
  });
  $(".pagebox07-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper72.swipeNext();
  });
  $(".pagebox07-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper72.swipeTo($(this).index());
    mySwiper7.swipeTo($(this).index());
  });
  function page7_resize() {
    // var this_h = $('.pagebox03-swiper01').width() * 0.5944741532976827;
    // $('.pagebox03-swiper01 .swiper-container').height( this_h );
    // $('.pagebox03-swiper01').css('margin-left', - $('.pagebox03-swiper01').width()/2 + 'px');
    // $('.pagebox03-swiper01').css('margin-top', - this_h/2 + 'px');
  }

  //page7
  var mySwiper14 = new Swiper(".pagebox14-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper142.swipeTo(mySwiper14.activeIndex);
      $(".pagebox14-swiper02 .swiper-slide")
        .eq(mySwiper14.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper142 = new Swiper(".pagebox14-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 4,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox14-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper142.swipePrev();
  });
  $(".pagebox14-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper142.swipeNext();
  });
  $(".pagebox14-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper142.swipeTo($(this).index());
    mySwiper14.swipeTo($(this).index());
  });
  function page14_resize() {
    // var this_h = $('.pagebox03-swiper01').width() * 0.5944741532976827;
    // $('.pagebox03-swiper01 .swiper-container').height( this_h );
    // $('.pagebox03-swiper01').css('margin-left', - $('.pagebox03-swiper01').width()/2 + 'px');
    // $('.pagebox03-swiper01').css('margin-top', - this_h/2 + 'px');
  }

  //page7
  // var mySwiper7_2 = new Swiper(".pagebox07-swiper02 .swiper-container", {
  //   // loop : true,
  //   slidesPerView: 5,
  //   resizeReInit: true,
  //   height: 190
  //   // cssWidthAndHeight : true,
  // });
  // $(".pagebox07-swiper02 .arrow-left").on("click", function(e) {
  //   e.preventDefault();
  //   mySwiper7_2.swipePrev();
  // });
  // $(".pagebox07-swiper02 .arrow-right").on("click", function(e) {
  //   e.preventDefault();
  //   mySwiper7_2.swipeNext();
  // });
  // $(".pagebox07-swiper02 .swiper-slide").on("click", function(e) {
  //   e.preventDefault();
  // });
  //
  // $(".pagebox07-swiper02 .swiper-slide").on("click", function(e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   var $this_img = $this.data("imgshow").imgurl;
  //   var $this_txt = $this.data("imgshow").showtxt;
  //   $(".pagebox07-imgshow").find("img").attr("src", $this_img);
  //   $(".pagebox07-imgshow").find("p").text($this_txt);
  //   $this.addClass("current").siblings(".swiper-slide").removeClass("current");
  // });
  // function page7_resize() {
  //   var this_w = $(".pagebox07-imgshow").width();
  //   var this_h = $(".pagebox07-imgshow").height();
  //   $(".pagebox07-imgshow").css("margin-left", -this_w / 2 + "px");
  //   // $('.pagebox07-imgshow').css('margin-top', - this_h/2 + 'px');
  // }

  var mySwiper9 = new Swiper(".pagebox09-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper92.swipeTo(mySwiper9.activeIndex);
      $(".pagebox09-swiper02 .swiper-slide")
        .eq(mySwiper9.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper92 = new Swiper(".pagebox09-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox09-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper92.swipePrev();
  });
  $(".pagebox09-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper92.swipeNext();
  });
  $(".pagebox09-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper92.swipeTo($(this).index());
    mySwiper9.swipeTo($(this).index());
  });

  var mySwiper10 = new Swiper(".pagebox10-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper102.swipeTo(mySwiper10.activeIndex);
      $(".pagebox10-swiper02 .swiper-slide")
        .eq(mySwiper10.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper102 = new Swiper(".pagebox10-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox10-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper102.swipePrev();
  });
  $(".pagebox10-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper102.swipeNext();
  });
  $(".pagebox10-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper102.swipeTo($(this).index());
    mySwiper10.swipeTo($(this).index());
  });

  var mySwiper12 = new Swiper(".pagebox12-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper122.swipeTo(mySwiper12.activeIndex);
      $(".pagebox12-swiper02 .swiper-slide")
        .eq(mySwiper12.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper122 = new Swiper(".pagebox12-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox12-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper122.swipePrev();
  });
  $(".pagebox12-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper122.swipeNext();
  });
  $(".pagebox12-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper122.swipeTo($(this).index());
    mySwiper12.swipeTo($(this).index());
  });

  var mySwiper13 = new Swiper(".pagebox13-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper132.swipeTo(mySwiper13.activeIndex);
      $(".pagebox13-swiper02 .swiper-slide")
        .eq(mySwiper13.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });

  var mySwiper132 = new Swiper(".pagebox13-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 150
    // cssWidthAndHeight : true,
  });
  $(".pagebox13-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper132.swipePrev();
  });
  $(".pagebox13-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper132.swipeNext();
  });
  $(".pagebox13-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper132.swipeTo($(this).index());
    mySwiper13.swipeTo($(this).index());
  });
  function page6_resize() {}

  //page8
  $(".pagebox08-head li").on("click", function() {
    var $this = $(this);
    var $this_index = $this.index();
    $this.addClass("current").siblings().removeClass("current");
    $(".pagebox08-body-item")
      .eq($this_index)
      .removeClass("hide")
      .siblings()
      .addClass("hide");
  });
  $(".content-scrollbar").mCustomScrollbar();
  function page8_resize() {
    var $hh = $(window).height() - 108 - 100 - 150;
    $(".pagebox08-body-item, .content-scrollbar").height($hh);
  }

  $(window).resize(function() {
    page_resize();
  });
  function page_resize() {
    page3_resize();
    page4_resize();
    page7_resize();
    page8_resize();
  }
  page_resize();
});

function swiper_h() {
  $(".pagebox07-swiper02").each(function() {
    var $this = $(this);
    var this_xl = $this.offset().left;
    var this_xr = this_xl + $this.width();
    $this.find(".swiper-slide").each(function() {
      var $this = $(this);
      var sub_xl = $this.offset().left;
      var sub_xr = sub_xl + $this.width();
      if (sub_xl < this_xl || sub_xr > this_xr) {
        $this.removeClass("swiper-slide-visible");
      } else {
        $this.addClass("swiper-slide-visible");
      }
      console.info(sub_xl + "-" + this_xl + "-" + sub_xr + "-" + this_xr);
    });
  });
}
(function() {
  // setInterval("swiper_h()", 50);
})();
