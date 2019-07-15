function changeTab(elem, n){
    let carousel = $(elem).parents('.carousel');
    carousel.find('.active').removeClass('active');
    $(elem).addClass('active');
    carousel.children('.tab-page').eq(n).addClass('active');
}

function showDivs(elem, n) {
    let slideshow = $(elem).parents('.slideshow-wrapper');
    slideshow.children('.active').removeClass('active');
    slideshow.children('.slideshow-item').eq(n).addClass('active');
}
