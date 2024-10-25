$(document).ready (function () {
    console.log("ready!");
    $(".responsive").slick({
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 3,
        slidesToShow: 3
    });
});
