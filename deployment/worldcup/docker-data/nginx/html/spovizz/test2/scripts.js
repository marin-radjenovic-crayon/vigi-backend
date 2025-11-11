$(document).ready(function () {
    const $slides = $(".slides");
    let currentSlide = 1;

    fadeIn($(".slides").find(".slide"), function () {
        setTimeout(function () {
            fadeOut($(".slides").find(".slide"), function () {

            });
        }, 2000)
    });

    setInterval(function () {
        fadeIn($(".slides").find(".slide"), function () {
            setTimeout(function () {
                fadeOut($(".slides").find(".slide"), function () {

                });
            }, 2000)
        });
    }, 6000)

    function fadeIn($slide, callback) {
        $slide.animate({
            opacity: 1
        }, 2000, function () {
            if (callback) {
                callback();
            }
        });

        $(".slides-info span").text(currentSlide++);
    }

    function fadeOut($slide, callback) {
        $slide.animate({
            opacity: 0
        }, 2000, function () {
            if (callback) {
                callback();
            }
        });
    }

});