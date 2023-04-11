let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

});

sr.reveal('.image-text', {
    delay: 200,
    origin: 'top'
})
sr.reveal('.Center-image', {
    delay: 450,
    origin: 'top'
})
sr.reveal('.icons', {
    delay: 500,
    origin: 'left'
})
sr.reveal('.rolagem', {
    delay: 500,
    origin: 'right'
})
