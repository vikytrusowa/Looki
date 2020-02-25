$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "#ffffff",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        starting_position: 25
    }).circularProgress("animate", 100, 9000);
    setTimeout(function () {
        $("#preloader").delay(500).fadeOut("slow");
    }, 9000);

    $("#fullpage").fullpage({
        sectionSelector: ".vertical-scrolling",
        slideSelector: '.horizontal-scrolling',
        controlArrows: false,
        onLeave: function (link, index) {
            if (index == 2) {
                if ($('#show_video').length === 0) {
                    $('.about__video').html("<div id='show_video'></div><video class=\"about__video\" autoplay=\"autoplay\" controls='controls'  poster=\"img/video.jpg\">\n" +
                        "           <source src=\"img/media/rolik_%20short.mp4\"\n" +
                        "                        type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'>\n" +
                        "            </video>");
                }
            } else {
                $('.about__video').html("<video class=\"about__video\"   poster=\"img/video.jpg\">\n" +
                    "                <source src=\"img/media/rolik_%20short.mp4\"\n" +
                    "                        type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'>\n" +
                    "            </video>");
            }
        }
    });
    $(".about__slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: "div",
        adaptiveHeight: 0
    });
});

