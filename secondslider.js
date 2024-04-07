document.addEventListener('DOMContentLoaded', function () {
var splide2 = new Splide('#second-slider', {
    type: "gallery",
    autoplay: true,
    interval: 2000,
    perPage: 2,
    padding: { right: 110 },
    gap: 30,
    arrows: false,
    rewind: true,
    breakpoints: {
        780: {
            perPage: 1,

        }
    }
}).mount();
});