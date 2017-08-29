var deleteLog = false;

$(function() {
  // if ((/msie [6|7|8]/i.test(navigator.userAgent))){
  // $('body').addClass('isitie');
  // };

  var timer1 = setInterval(function() {
    if (document.readyState == "complete") {
      $(".load").remove();
      srollpage();
      clearInterval(timer1);
    }
  }, 500);
  function srollpage() {
    $("#thispage").pagepiling({
      menu: "#menu",
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
        "page15"
      ],
      sectionsColor: [
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04",
        "#110d04"
      ],
      navigation: false,
      normalScrollElements: ".pagebox09-wrapper",
      afterRender: function() {
        $(".load").hide();
        $(".pagebox01-txt01").velocity(
          { opacity: 1, top: 0 },
          { duration: 1000, easing: "swing", delay: 0 }
        );
        $(".pagebox01-txt02").velocity(
          { opacity: 1, top: "5%" },
          { duration: 1000, easing: "swing", delay: 300 }
        );
        $(".pagebox01-txt03").velocity(
          { opacity: 1, top: 0 },
          { duration: 1000, easing: "swing", delay: 600 }
        );
        $(".pagebox01-txt04").velocity(
          { opacity: 1, right: "1.68421%" },
          { duration: 1000, easing: "swing", delay: 200 }
        );
      },
      afterLoad: function(anchorLink, index) {
        if (index == 1) {
          $("#menu li").removeClass("active").eq(0).addClass("active");

          $(".pagebox01-txt01").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox01-txt02").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 300 }
          );
          $(".pagebox01-txt03").velocity(
            { opacity: 1, top: 0 },
            { duration: 1000, easing: "swing", delay: 600 }
          );
          $(".pagebox01-txt04").velocity(
            { opacity: 1, right: 0 },
            { duration: 1000, easing: "swing", delay: 200 }
          );
        }
        if (index == 2) {
          $(".pagebox02-txt01").velocity(
            { opacity: 1, left: "3%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox02-txt02").velocity(
            { opacity: 1, right: "0" },
            { duration: 1000, easing: "swing", delay: 100 }
          );
        }
        console.log(index);
        if (index == 3) {
          $("#menu li").eq(1).addClass("active");

          page4_resize();
          $(".pagebox04-txt01").velocity(
            { opacity: 1, left: "0" },
            { duration: 1000, easing: "swing", delay: 0 }
          );

          $(".pagebox04 .link-a-group").velocity(
            { opacity: 1 },
            { duration: 800, easing: "swing", delay: 800 }
          );
        }
        if (index == 4) {
          $("#menu li").eq(1).addClass("active");
          $(".pagebox03-txt01").velocity(
            { opacity: 1, left: "0" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 5) {
          page5_resize();
          $("#menu li").eq(2).addClass("active");
          $(".pagebox05-txt01").velocity(
            { opacity: 1, right: "0" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox05-txt02").velocity(
            { opacity: 1, left: "1%" },
            { duration: 800, easing: "swing", delay: 800 }
          );
        }
        if (index == 6) {
          $("#menu li").eq(2).addClass("active");
          $(".pagebox06-txt01").velocity(
            { opacity: 1, left: "0%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 7) {
          //page8_resize();
          $("#menu li").eq(2).addClass("active");

          // $("#menu li").eq(3).addClass("active");
          $(".pagebox13-txt01").velocity(
              { opacity: 1, left: "1%" },
              { duration: 1000, easing: "swing", delay: 0 }
          );

        }

        if (index == 8) {
          page7_resize();
          $("#menu li").eq(2).addClass("active");

          // $("#menu li").eq(3).addClass("active");
          $(".pagebox11-txt01").velocity(
            { opacity: 1, left: "1%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
          //$(".pagebox11-txt01").velocity(
          //  { opacity: 1, right: "-20px" },
          //  { duration: 1000, easing: "swing", delay: 0 }
          //);
        }


        if (index == 9) {
          $("#menu li").eq(3).addClass("active");

          // $(".pagebox08-txt02").velocity(
          //   { opacity: 1, left: "1%" },
          //   { duration: 1000, easing: "swing", delay: 0 }
          // );
          $(".pagebox08-txt02").velocity(
              { opacity: 1, left: "1%" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox08-txt01").velocity(
              { opacity: 1, right: "0%" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 10) {
          $("#menu li").eq(3).addClass("active");

          $(".pagebox12-txt01").velocity(
              { opacity: 1, left: "0" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
          //
          //$(".pagebox09-txt01").velocity(
          //    { opacity: 1, left: "0" },
          //    { duration: 1000, easing: "swing", delay: 0 }
          //);
          //$(".pagebox09-txt02").velocity(
          //    { opacity: 1, bottom: "10%" },
          //    { duration: 1000, easing: "swing", delay: 0 }
          //);
        }

        if (index == 11) {
          $("#menu li").eq(3).addClass("active");

          $(".pagebox07-txt01").velocity(
              { opacity: 1, left: "0" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
        }

        if (index==12) {
          $("#menu li").eq(4).addClass("active");

          $(".pagebox09-txt01").velocity(
              { opacity: 1, left: "0" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
          $(".pagebox09-txt02").velocity(
              { opacity: 1, bottom: "10%" },
              { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index==13) {
          $("#menu li").eq(5).addClass("active");
        }
        },
      onLeave: function(index, nextIndex, direction) {
        $(".win-pop-bg").trigger("click");
        if (index == "1") {
          $(".bottom-pop-form").addClass("hide");
          $(".pagebox01-txt01").attr("style", "");
          $(".pagebox01-txt02").attr("style", "");
          $(".pagebox01-txt03").attr("style", "");
          $(".pagebox01-txt04").attr("style", "");
        }
        if (index == 2) {
          $(".pagebox02-txt01").attr("style", "");
          $(".pagebox02-txt02").attr("style", "");
        }
        if (index == 3) {
        }
        if (index == 4) {
          $(".pagebox04-txt01").attr("style", "");
          $(".pagebox04-txt02").attr("style", "");
          $(".pagebox04 .link-a-group").velocity(
            { opacity: 0 },
            { duration: 0, easing: "swing", delay: 0 }
          );
        }
        if (index == 5) {
          $(".pagebox05-txt01").attr("style", "");
          $(".pagebox05 .link-a-group").velocity(
            { opacity: 0 },
            { duration: 0, easing: "swing", delay: 0 }
          );
        }
        if (index == 6) {
          $(".pagebox06-txt01").velocity(
            { opacity: 1, right: "32.894736%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
        if (index == 8) {
          $(".pagebox08-txt01").velocity(
            { opacity: 1, right: "0%" },
            { duration: 1000, easing: "swing", delay: 0 }
          );
        }
      }
    });
  }

  $(window).resize(function() {
    autoScrolling();
  });
  function autoScrolling() {
    var $ww = $(window).width();
    var $hh = $(window).height();
    if ($ww < 1024) {
      // $.fn.fullpage.setAutoScrolling(false);
    } else {
      // $.fn.fullpage.setAutoScrolling(true);
    }
    if ($hh / $ww > 1080 / 1900) {
      $("body").addClass("big-vertical");
    } else {
      $("body").removeClass("big-vertical");
    }
  }
  autoScrolling();

  $(document)
    .on("click", ".pop-close", function() {
      $(this).parents(".popbox").hide().attr("style", "");
      $(".win-pop-bg").hide();
      $(".win-pop-bg").attr("class", "win-pop-bg");
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

  //page1
  $(".popForm").on("click", function() {
    console.log(45678);
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
    height: "100%",
    onSlideChangeEnd: function(swiper) {
      mySwiper2.swipeTo(mySwiper.activeIndex);
      $(".pagebox03-swiper02 .swiper-slide")
        .eq(mySwiper.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });
  $(".pagebox03-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper.swipePrev();
  });
  $(".pagebox03-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper.swipeNext();
  });

  var mySwiper2 = new Swiper(".pagebox03-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 5,
    offsetSlidesBefore: 3,
    offsetSlidesAfter: 3,
    resizeReInit: true,
    height: 190
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
    //var this_w = $(".pagebox03-swiper01").width();
    //var this_h = $(".pagebox03-swiper01").height();
    //$(".pagebox03-swiper01").css("margin-left", -this_w / 2 + "px");
    //
    //var $this = $(".pagebox03-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.75;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.75;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2 + 150;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 1.78 * ($this_h - 40);
    //$this.width($this_w);
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    //// console.info($this_box_h);
  }

  //page4
  $(document).on("click", ".pagebox04 .link-a", function() {
    var $this = $(this);
    var $this_pop = $(".pagebox04-pop");
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
    var $this_w = $(window).width();
    var $this_h = $(window).height();
    if ($("body").hasClass("big-vertical")) {
      $this_h = $this_h * 0.39629629;
      $this_w = 1036 / 428 * $this_h;
    } else {
      $this_w = $this_w * 0.54526315;
      $this_h = 428 / 1036 * $this_w;
    }
    $this.css({ width: $this_w + "px", height: $this_h + "px" });
    $this.css({
      "margin-left": -$this_w / 2 + "px",
      "margin-top": -$this.height() / 2 + "px"
    });

    $(".pagebox04-pop:visible").each(function() {
      $(this).css("margin-left", -$(this).width() / 2 + "px");
      $(this).css("margin-top", -$(this).height() / 2 + "px");
    });
  }

  //page5
  $(document).on("click", ".pagebox05 .link-a", function() {
    var $this = $(this);
    var $this_pop = $(".pagebox04-pop");
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

    $this_pop.css({
      visibility: "visible",
      "margin-left": -this_w / 2 + "px",
      marginTop: -this_h / 2 + "px"
    });
    $this_pop.stop().animate({ top: "50%" }, 800, "easeOutExpo");
    $(".win-pop-bg").delay("800").show();
  });
  function page5_resize() {
    var $this = $(".pagebox05 .link-a-group");
    var $this_w = $(window).width();
    var $this_h = $(window).height();
    if ($("body").hasClass("big-vertical")) {
      $this_h = $this_h * 0.39629629;
      $this_w = 1036 / 428 * $this_h;
    } else {
      $this_w = $this_w * 0.54526315;
      $this_h = 428 / 1036 * $this_w;
    }
    $this.css({ width: $this_w + "px", height: $this_h + "px" });
    $this.css({
      "margin-left": -$this_w / 2 + "px",
      "margin-top": -$this.height() / 2 + "px"
    });

    $(".pagebox05-pop:visible").each(function() {
      $(this).css("margin-left", -$(this).width() / 2 + "px");
      $(this).css("margin-top", -$(this).height() / 2 + "px");
    });
  }

  //page6
  var mySwiper6 = new Swiper(".pagebox06-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    height: "100%",
    onSlideChangeEnd: function(swiper) {
      mySwiper62.swipeTo(mySwiper6.activeIndex);
      $(".pagebox06-swiper02 .swiper-slide")
        .eq(mySwiper6.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    }
  });
  $(".pagebox06-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper6.swipePrev();
  });
  $(".pagebox06-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper6.swipeNext();
  });

  var mySwiper62 = new Swiper(".pagebox06-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
    height: 190
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
  function page6_resize() {
    //var this_w = $(".pagebox06-swiper01").width();
    //var this_h = $(".pagebox06-swiper01").height();
    //$(".pagebox06-swiper01").css("margin-left", -this_w / 2 + "px");
    //
    //var $this = $(".pagebox06-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.75;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.75;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2 + 150;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 1.78 * ($this_h - 40);
    //$this.width($this_w);
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    //console.info($this_box_h);
  }

  //page6
  var mySwiper13 = new Swiper(".pagebox13-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    height: "100%",
    onSlideChangeEnd: function(swiper) {
      mySwiper132.swipeTo(mySwiper13.activeIndex);
      $(".pagebox13-swiper02 .swiper-slide")
          .eq(mySwiper13.activeIndex)
          .addClass("current")
          .siblings(".swiper-slide")
          .removeClass("current");
    }
  });
  $(".pagebox13-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper13.swipePrev();
  });
  $(".pagebox13-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper13.swipeNext();
  });

  var mySwiper132 = new Swiper(".pagebox13-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 5,
    resizeReInit: true,
    height: "100%",
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
  function page132_resize() {
    //var this_w = $(".pagebox06-swiper01").width();
    //var this_h = $(".pagebox06-swiper01").height();
    //$(".pagebox06-swiper01").css("margin-left", -this_w / 2 + "px");
    //
    //var $this = $(".pagebox06-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.75;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.75;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2 + 150;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 1.78 * ($this_h - 40);
    //$this.width($this_w);
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    //console.info($this_box_h);
  }


  //page11
  var mySwiper11 = new Swiper(".pagebox11-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper112.swipeTo(mySwiper11.activeIndex);
      $(".pagebox11-swiper02 .swiper-slide")
          .eq(mySwiper11.activeIndex)
          .addClass("current")
          .siblings(".swiper-slide")
          .removeClass("current");
    }
  });
  $(".pagebox11-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper11.swipePrev();
  });
  $(".pagebox11-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper11.swipeNext();
  });

  var mySwiper112 = new Swiper(".pagebox11-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 6,
    resizeReInit: true,
    height: "100%"
    // cssWidthAndHeight : true,
  });
  $(".pagebox11-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper112.swipePrev();
  });
  $(".pagebox11-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper112.swipeNext();
  });
  $(".pagebox11-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper112.swipeTo($(this).index());
    mySwiper11.swipeTo($(this).index());
  });
  function page11_resize() {
    //var this_w = $(".pagebox06-swiper01").width();
    //var this_h = $(".pagebox06-swiper01").height();
    //$(".pagebox06-swiper01").css("margin-left", -this_w / 2 + "px");
    //
    //var $this = $(".pagebox06-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.75;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.75;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2 + 150;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 1.78 * ($this_h - 40);
    //$this.width($this_w);
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    //console.info($this_box_h);
  }




  //page11
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
  $(".pagebox12-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper122.swipePrev();
  });
  $(".pagebox12-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper122.swipeNext();
  });

  var mySwiper122 = new Swiper(".pagebox12-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 3,
    resizeReInit: true,
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
  function page11_resize() {
    //var this_w = $(".pagebox06-swiper01").width();
    //var this_h = $(".pagebox06-swiper01").height();
    //$(".pagebox06-swiper01").css("margin-left", -this_w / 2 + "px");
    //
    //var $this = $(".pagebox06-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.75;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.75;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2 + 150;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 1.78 * ($this_h - 40);
    //$this.width($this_w);
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    //console.info($this_box_h);
  }




  //page7
  var mySwiper7_1 = new Swiper(".pagebox07-swiper01 .swiper-container", {
    // loop : true,
    slidesPerView: 1,
    resizeReInit: true,
    onSlideChangeEnd: function(swiper) {
      mySwiper7_2.swipeTo(mySwiper7_1.activeIndex);
      $(".pagebox07-swiper02 .swiper-slide")
        .eq(mySwiper7_1.activeIndex)
        .addClass("current")
        .siblings(".swiper-slide")
        .removeClass("current");
    },
    onInit: function(swiper) {
      page7_resize();
    }
  });
  $(".pagebox07-swiper01 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper7_1.swipePrev();
  });
  $(".pagebox07-swiper01 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper7_1.swipeNext();
  });

  var mySwiper7_2 = new Swiper(".pagebox07-swiper02 .swiper-container", {
    // loop : true,
    slidesPerView: 5,
    resizeReInit: true,
    height: 190,
    // cssWidthAndHeight : true,
    onSlideChangeEnd: function(swiper) {
      mySwiper7_1.swipeTo(mySwiper7_2.activeIndex);
      swiper_h();
    }
  });
  $(".pagebox07-swiper02 .arrow-left").on("click", function(e) {
    e.preventDefault();
    mySwiper7_2.swipePrev();
  });
  $(".pagebox07-swiper02 .arrow-right").on("click", function(e) {
    e.preventDefault();
    mySwiper7_2.swipeNext();
  });
  $(".pagebox07-swiper02 .swiper-slide").on("click", function(e) {
    e.preventDefault();
    mySwiper7_2.swipeTo($(this).index());
    mySwiper7_1.swipeTo($(this).index());
  });

  function page7_resize() {
    // var this_w = $('.pagebox07-swiper01').width();
    // var this_w = $('.pagebox07-swiper01').width();
    // 	var this_h = $('.pagebox07-swiper01').height();
    // 	$('.pagebox07-swiper01').css('margin-left', - this_w/2 + 'px');

    //var $this = $(".pagebox07-swiper01");
    //var $this_box_w = $(window).width();
    //// var $this_box_h = $('.pagebox07-swiper02').offset().top;
    //var $this_box_h = $(window).height() * 0.83;
    //var $this_t, $this_w, $this_h;
    //$this_h = $this_box_h * 0.7;
    //if ($this_h > 550) {
    //  $this_h = 550;
    //}
    //$this_t = ($this_box_h - $this_h) / 2;
    //if ($this_t < 0) {
    //  $this_t = 0;
    //}
    //$this_w = 780 / 500 * ($this_h - 40);
    //$this.width($this_w);
    //// $this.find('.swiper-slide').width( $this_w );
    //$this.height($this_h);
    //$this.css({ top: $this_t + "px", "margin-left": -$this_w / 2 + "px" });
    // console.info($this_box_h);
  }

  //page9
  $(".pagebox09-head li").on("click", function() {
    var $this = $(this);
    var $this_index = $this.index();
    var $this_box = $(".pagebox09-body-item").eq($this_index);
    $this.addClass("current").siblings().removeClass("current");
    $this_box.removeClass("hide").siblings().addClass("hide");
    $this_box
      .find(".content-scrollbar:not(.mCustomScrollbar )")
      .mCustomScrollbar();
  });
  $(".f-b-btn").on("click", function() {
    $(".popForm").trigger("click");
  });

  $(".content-scrollbar1").mCustomScrollbar();
  function page8_resize() {
    var $hh = $(window).height() - 108 - 100 - 80;
    $(".pagebox09-body-item, .content-scrollbar").height($hh);
  }

  $(window).resize(function() {
    page_resize();
  });
  function page_resize() {
    page3_resize();
    page4_resize();
    page5_resize();
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
      // console.info( sub_xl +'-'+ this_xl +'-'+  sub_xr +'-'+  this_xr);
    });
  });

  $(
    ".pagebox03-swiper01 .pop-img, .pagebox07-swiper01 .pop-img"
  ).each(function() {
    var $this = $(this);
    $this.width($this.parents(".swiper-container").width());
    $this.next("p").width($this.parents(".swiper-container").width());
  });
}
(function() {
  setInterval("swiper_h()", 50);
})();
