document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide('.splide.slider1', {
        type: 'carousel',
        perPage: 3,
        pagination: true,
        breakpoints: {
            375: {
                perPage: 1,
            }
        }
    }).mount();
});