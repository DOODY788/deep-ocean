const feed_elems = document.querySelectorAll('.feed1');
feed_elems.forEach((y) => {
    y.onclick = () => {
        logpull();
    }
})

function logpull() {
    const elem_back = document.getElementById('lgnss');
    const elem_main = document.querySelector('.lngs');

    elem_back.style.display = 'block';
    elem_main.style.display = 'block';
}

const lg_off = document.getElementById('lg_off');
lg_off.onclick = () => {
    const elem_back = document.getElementById('lgnss');
    const elem_main = document.querySelector('.lngs');

    elem_back.style.display = 'none';
    elem_main.style.display = 'none';
}
const lg_1 = document.getElementById('gt-login');
const lg_2 = document.getElementById('lg_2');
lg_1.onclick = () => {
    pullweb();
}
lg_2.onclick = () => {
    pullweb();
}
function pullweb() {
    window.open('/login', '_parent');
}
