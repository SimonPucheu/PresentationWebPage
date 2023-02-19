document.querySelector('header nav .hamburg').onclick = function () {
    document.querySelector('header nav ul').classList.toggle('show');
    span = this.querySelector('span');
    span.innerHTML = span.innerHTML == 'menu' ? 'close' : 'menu';
}
window.onload = function () {
    document.querySelector('main').onclick = hide;
    document.querySelector('footer').onclick = hide;
}
function hide() {
    document.querySelector('header nav ul').classList.remove('show');
    document.querySelector('.account').classList.add('hide');
}
function account() {
    document.querySelector('.logo div.account').classList.toggle('hide');
}
window.onscroll = scroll;
function scroll() {
    if (window.scrollY >= 50) {
        document.querySelector('header nav').classList.add('scroll');
    }
    else {
        document.querySelector('header nav').classList.remove('scroll');
    }
}