function changeTab(buttonID, tabID){
    // button
    var active_button = document.getElementsByClassName('tab-navbutton active');
    if (active_button.length == 1){
        active_button[0].classList.remove('active');
    }
    var target_button = document.getElementById(buttonID);
    target_button.classList.add('active');

    // tab
    var active_tab = document.getElementsByClassName('tab-page active');
    if (active_tab.length == 1){
        active_tab[0].classList.remove('active');
    }
    var target_tab = document.getElementById(tabID);
    target_tab.classList.add('active');
}

function showDivs(elem, n) {
    let slideshow = $(elem).parents('.slideshow-wrapper');
    slideshow.children('.active').removeClass('active');
    slideshow.children('.slideshow-item').eq(n).addClass('active');
}
