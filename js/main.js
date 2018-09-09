
  // Sticky design team sidebar

  var stick = $("#stick");

  stick.on("scroll", function(e) {

    if (this.scrollTop > 1000) {
      stick.addClass("sticky-sidebar");
    } else {
      stick.removeClass("sticky-sidebar");
    }

  });


}(jQuery);
