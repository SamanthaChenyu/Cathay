 $(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
        $(".icon-box").hide().css("opacity","0");
    });
});

$(window).scroll(function (event) {
    var sc = $(window).scrollTop();
    var number = $(".Stock").scrollTop();
    if ( sc > 60 ) {
        $("main").addClass("add-meau");
    } else {
        $("main").removeClass("add-meau");
    }

    if ( sc > number ) {
        $(".icon-box").show().css("opacity","1");
    } else {
        $(".icon-box").hide();
    }

    if ( sc > 4000 ) {
      console.log("gtm");
      dataLayer.push({
      'eventCategory':'2017cathayCategory',
      'eventAction':'2017cathayAction',
      'eventLabel':'2017cathay_reportdownload',
      'event':'2017cathay_reportdownload'
      });
    }
});

$(document).ready(function(){
  $('.menu ul li a').click(function(){
    $('.menu-checkbox').click();
  }); 
  $("#is_mkt").prop("checked",true);
});


$(function() {
  $(".hastag0").click(function(){
    $("html,body").animate({scrollTop:$('.part1').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag1").click(function(){
    $("html,body").animate({scrollTop:$('.part3').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag2").click(function(){
    $("html,body").animate({scrollTop:$('.part4').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag3").click(function(){
    $("html,body").animate({scrollTop:$('.part5').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag7").click(function(){
    $("html,body").animate({scrollTop:$('.part7').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag13").click(function(){
    $("html,body").animate({scrollTop:$('.part10').offset().top - 52}, 900);
    return false;
  });
});


$(function() {
  $(".hastag4").click(function(){
    $("html,body").animate({scrollTop:$('.part12').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag5").click(function(){
    $("html,body").animate({scrollTop:$('.part8').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $(".hastag6").click(function(){
    $("html,body").animate({scrollTop:$('.part9').offset().top - 52}, 900);
    return false;
  });
});

$(function() {
  $("#inside").click(function(){
    $("html,body").animate({scrollTop:$('#form').offset().top - 55}, 900);
    return false;
  });
});


// $(".download").mouseover(function() {
//   $(".download-small").hide();
//   $(".small-download").hide();
//   $(".small").show();
// });
// $(".download").mouseout(function() {
//   $(".download-small").show();
//   $(".small-download").show();
//   $(".small").hide();
// });
// $(".live").mouseover(function() {
//   $(".live").text("敬請期待！");
// });
// $(".live").mouseout(function() {
//   $(".live").text("論壇直播");
// });


$(".video").click(function() {
  $("#careful").fadeIn();
});

$(".close").click(function() {
  $("#careful").fadeOut();
});

//     var startDate = new Date();
//     var endDate = new Date('2017/12/07 11:00');  //2017/12/07 14:30
//     var spantime = (endDate - startDate) / 1000;

//     var timer = setInterval(function () {
//         spantime--;
//         var d = Math.floor(spantime / (24 * 3600));
//         var h = Math.floor((spantime % (24 * 3600)) / 3600);
//         var m = Math.floor((spantime % 3600) / (60));
//         var s = Math.floor(spantime % 60);

//         if (s < 0) {
//             $("#live").show();
//             $("#downcounter").hide();
// }

//         if (spantime > 0) {
//             $("#day").text(d);
//             $("#hour").text(h);
//             $("#min").text(m);
//             $("#sec").text(s);
//         } else { // 避免倒數變成負的 spantime < 0
//             $("#day").text(0);
//             $("#hour").text(0);
//             $("#min").text(0);
//             $("#sec").text(0);
//             clearInterval(timer);
//         }
//     }, 1000)