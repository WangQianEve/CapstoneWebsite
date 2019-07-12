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
