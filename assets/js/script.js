const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    });

    var carouselWidth = jQuery(".carousel-inner")[0].scrollWidth;
    var cardWidth = jQuery(".carousel-item").width();

    var scrollPosition = 0;

    jQuery(".carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
            scrollPosition = scrollPosition + cardWidth;
            jQuery(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
    });
    jQuery(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            jQuery(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
    });
} else {
    jQuery(multipleItemCarousel).addClass("slide");
}