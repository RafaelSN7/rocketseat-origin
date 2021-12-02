/* Abre e fecha o menu com clique no icone */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
};

/* Quando clicar em um item do menu, Esconder menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
};

/* Mudar header quando der scroll */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
});

/* Testimonials swiper*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
});

/* ScrollReveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(`
#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`
, { interval: 100 })

/* Back to top*/

const backToTopButtom = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButtom.classList.add('show')
    } else {
        backToTopButtom.classList.remove('show')
    }
})

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrent() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}