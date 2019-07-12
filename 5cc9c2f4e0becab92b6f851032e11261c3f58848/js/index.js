function updateNavColor($anchor, $navbar) {
    yPosition = window.pageYOffset;
    if (yPosition >= $anchor.offset().top) {
        $navbar.removeClass('homepage');
    } else {
        $navbar.addClass('homepage');
    }
}

$(document).ready (function () {
    const $navbar = $('.navbar');
    const $nav_anchor = $('#nav_anchor');
    window.onscroll = function() {
        updateNavColor($nav_anchor, $navbar);
    };
});

