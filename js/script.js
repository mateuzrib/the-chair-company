const up_button = document.querySelector('#btn-up');

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        up_button.style.display ='block'
    } else {
        up_button.style.display = 'none'
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}