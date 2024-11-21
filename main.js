$(document).ready(function(){

    $("button").click(function(e){
        e.preventDefault();
    })

    $("#divNomeDoItem").css("display", "none");

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
        let destino = $("#catalogo");

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

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: '(00) 00000-0000'
    });

    $("form").validate({

        errorClass: "error",

        errorPlacement: function(error, element){
            error.insertAfter(element);
        },

        rules: {
            nome: {
                required: true
            },
            
            email: {
                required: true,
                email: true,
                
            },
    
            telefone: {
                required: true,

            }
        }
    })

    $(".botao-interesse").click(function(){

        let destino = $("#contato");

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)

        let spanSelecao = $("#itemSelecionado");

        let nomeItemH2 = $("#nomeItemSelecionado");

        let liId = $(this).parent().attr("id");
        
        let imagem = $(`#${liId}`).children("img").attr("src");

        let nomeItem = $(`#${liId}`).children("p").text();

        $("#divNomeDoItem").css("display", "flex");

        $("#msgItemSelecionado").css("display", "none");

        $("#itemSelecionado").css("display", "block");
        
        spanSelecao.html(`<img src="${imagem}">`);

        nomeItemH2.html(`Ótima escolha! <br> Vela "${nomeItem}"`);

        nomeItemH2.css({
            "display": "block",
            "font-family": "var(--fonte-destaque)"
        })
    })

});