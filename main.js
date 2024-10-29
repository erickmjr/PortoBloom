$(document).ready(function(){

    $("#carousel-images").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:  false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
    })

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })
})