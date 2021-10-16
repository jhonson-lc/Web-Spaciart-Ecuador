const open__bars = document.querySelector(".nav__bars ");
const close__bars = document.querySelector(".nav__closebars ");
const nav__menu = document.querySelector(".nav__menu");
const nav__redes = document.querySelector(".nav__redes");
const menu = document.querySelector(".menu");



open__bars.addEventListener("click", show);
close__bars.addEventListener("click", hidden);

function show() {
    nav__menu.classList.toggle("nav__menu--toggle");
    nav__redes.classList.toggle("nav__redes--toggle");
}

function hidden() {
    nav__menu.classList.toggle("nav__menu--closetoggle");
    nav__redes.classList.toggle("nav__redes--toggle");
    setTimeout(function() {
        nav__menu.classList.remove("nav__menu--toggle");
        nav__menu.classList.remove("nav__menu--closetoggle");
    }, 2000);
}



let back = document.querySelectorAll(".back");
let whats = document.querySelector(".api__title");

const mostrar = () => {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < back.length; i++) {
        let alturaback = back[i].offsetTop;
        let alturawhats = whats.offsetTop;
        if (alturaback - 400 < scrollTop) {
            back[i].style.opacity = 1;
            whats.style.opacity = 1;
        } else {
            back[i].style.opacity = 0;
            whats.style.opacity = 0;
        }
    }
}

window.addEventListener('scroll', mostrar);
window.addEventListener('scroll', mostrar);

let nav = document.querySelectorAll(".nav");

const mostrarnav = () => {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < nav.length; i++) {
        let alturanav = nav[i].offsetTop;
        if (alturanav < scrollTop) {
            nav[i].style.background = "#e0e0e0";
        } else {
            nav[i].style.background = "transparent";
        }
    }
}

window.addEventListener('scroll', mostrarnav);

const slider = document.querySelector(".nosotros__sug");
let sliderSection = document.querySelectorAll(".nosotros__slider");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.querySelector(".btn__slider--right");
const btnLeft = document.querySelector(".btn__slider--left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function nextRight() {
    let sliderSectionFirst = document.querySelectorAll(".nosotros__slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnRight.addEventListener("click", nextRight);

btnLeft.addEventListener("click", () => {
    let sliderSection = document.querySelectorAll(".nosotros__slider");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
});

setInterval(function() {
    nextRight();
}, 20000);

const sliderBanner = document.querySelector(".home__img");
let sliderSectionBanner = document.querySelectorAll(".home__img--banner");
let sliderSectionLastBanner = sliderSectionBanner[sliderSectionBanner.length - 1];

sliderBanner.insertAdjacentElement('afterbegin', sliderSectionLastBanner);

function nextRightBanner() {
    let sliderSectionFirstBanner = document.querySelectorAll(".home__img--banner")[0];
    sliderBanner.style.marginLeft = "-200%";
    sliderBanner.style.transition = "all 1s cubic-bezier(.57,.21,.69,1.25)";
    setTimeout(function() {
        sliderBanner.style.transition = "none";
        sliderBanner.insertAdjacentElement('beforeend', sliderSectionFirstBanner);
        sliderBanner.style.marginLeft = "-100%";
    }, 1000)
}

setInterval(function() {
    nextRightBanner();
}, 10000);