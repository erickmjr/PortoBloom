$(document).ready(function(){

    $("html").click(function(e){
        e.preventDefault();
    })

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

    $("#li-bombando").click(function(){
        let destino = $("#bombando");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $("#li-produtos").click(function(){
        let destino = $("#interesse");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $("#li-contato").click(function(){
        let destino = $("#contato");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})