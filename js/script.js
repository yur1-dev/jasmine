var loaded = false;

// Hamburger Menu
$("#nav-icon").click(function () {
  $(this).toggleClass("open");
  $(".nav").toggleClass("open");
  $("body").toggleClass("fixed");
});

// Close menu when a link is clicked
$(".nav li a").click(function () {
  $("#nav-icon").click();
});

$(window).scroll(function () {
  activateSections();
});

function activateSections() {
  var $sections = $(".main section:not(.active)");

  var windowScrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  $sections.each((index, section) => {
    var sectionTop = section.offsetTop;
    if (loaded && sectionTop - windowScrollTop < windowHeight / 2) {
      $(section).addClass("active");
    }
  });
}

// Loading animation
(function () {
  const minLoadingTime = 500; // milliseconds
  const readyTime = new Date();

  $(window).load(function () {
    const loadingInterval = setInterval(() => {
      const now = new Date();
      if (now - readyTime > minLoadingTime) {
        loaded = true;
        hideLoading();
        activateSections();

        clearInterval(loadingInterval);
      }
    }, 100);
  });
})();

function hideLoading() {
  $(".loading").animate({ opacity: 0 }, 400, function () {
    $(".loading").hide();
  });
}
