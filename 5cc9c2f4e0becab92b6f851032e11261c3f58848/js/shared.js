function openNavMenu() {
    var nav = $('.nav-menu');
    if (nav.hasClass('show')) {
        nav.removeClass('show');
    } else {
        nav.addClass('show');
    }
}