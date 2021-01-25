$(document).ready(function () {
  $("body").hide().fadeIn(1500);

  // adapted from https://codepen.io/_codemics/pen/PwEbYJ
  var stickyNavTop = $("nav").offset().top;

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});
