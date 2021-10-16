const product__one = document.querySelector(".product__one");
const product__two = document.querySelector(".product__two");
const product__three = document.querySelector(".product__three");
const product__four = document.querySelector(".product__four");
const product__five = document.querySelector(".product__five");
const product__six = document.querySelector(".product__six");
const product__seven = document.querySelector(".product__seven");
const pantallaCarga = document.querySelector(".pantallacarga");

window.onload = function() {
    pantallaCarga.classList.toggle("pantallacarga--toggle");
    setTimeout(function() {
        pantallaCarga.classList.remove("pantallacarga--toggle");
    }, 2000);
};

product__one.addEventListener("click", () => {
    window.location.href = "/muebles/silloneria.html";
});
product__two.addEventListener("click", () => {
    window.location.href = "/muebles/mesas-de-reunion.html";
});
product__three.addEventListener("click", () => {
    window.location.href = "/muebles/linea-restaurant.html";
});
product__four.addEventListener("click", () => {
    window.location.href = "/muebles/linea-escolar.html";
});
product__five.addEventListener("click", () => {
    window.location.href = "/muebles/gondolas.html";
});
product__six.addEventListener("click", () => {
    window.location.href = "/muebles/archivadores.html";
});
product__seven.addEventListener("click", () => {
    window.location.href = "/muebles/counters.html";
});