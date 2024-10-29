// Inicializar o Slick Carousel para o carrossel de depoimentos
$(document).ready(function(){
    $('.testimonial-cards').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    });
});


// Script para o modal
function closeModal() {
    document.getElementById("successModal").style.display = "none";
}

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successModal").style.display = "flex";
});
