function openNavMenu() {
    var nav = $('.nav-menu');
    if (nav.hasClass('show')) {
        nav.removeClass('show');
    } else {
        nav.addClass('show');
    }
}

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


function setup_expandable_img() {
    var i;
    var wrapper = document.getElementById("expanded-img-wrapper");
    var expanded_img = document.getElementById("expanded-img");
    var slideshow_list = document.getElementsByClassName('slideshow-img');
    for (i = 0; i < slideshow_list.length; i++){
        slideshow_list[i].onclick = function(){
            wrapper.style.display = 'flex';
            expanded_img.src = this.src;
        }
    }
    var tab_cover_list = document.getElementsByClassName('tab-cover-image');
    for (i = 0; i < tab_cover_list.length; i++){
        tab_cover_list[i].onclick = function(){
            wrapper.style.display = 'flex';
            expanded_img.src = this.src;
        }
    }

    wrapper.onclick = function() {
        wrapper.style.display = "none";
    }
}

function getSections($links) {
    return $(
        $links
            .map((i, el) => $(el).attr('href'))
            .toArray()
            .filter(href => href.charAt(0) === '#')
            .join(','),
    );
}

function updateNav($sections, $links) {
    yPosition = window.pageYOffset+300;
    // in page
    for (let i = $sections.length - 1; i >= 0; i -= 1) {
        $section = $sections.eq(i);
        if (yPosition >= $section.offset().top) {
            return $links
                .removeClass('active')
                .filter(`[href="#${$section.attr('id')}"]`)
                .addClass('active');
        }
    }
    $links.removeClass('active');
}

$(document).ready(function() {
    const $links = $('.inpage-nav > a');
    const $sections = getSections($links);
    window.onscroll = function() {
        updateNav($sections, $links);
    };
    updateNav($sections, $links);
});
