const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        btnTopo.style.display = "block";

    } else {

        btnTopo.style.display = "none";

    }

});

btnTopo.addEventListener("click", function() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

})

const curiosidades = [
    "O sal marinho é obtido por meio da evaporação da água do mar.",
    "O sal-gema pode ter se formado há milhões de anos, a partir da evaporação de antigos mares.",
    "A cor rosada do sal do Himalaia está relacionada à presença de pequenas quantidades de minerais, incluindo compostos de ferro.",
    "O principal componente do sal de cozinha é o cloreto de sódio, cuja fórmula química é NaCl.",
    "A cristalização é um processo físico importante na produção de diferentes tipos de sal."
];

const btnCuriosidade = document.getElementById("btnCuriosidade");
const textoCuriosidade = document.getElementById("textoCuriosidade");

btnCuriosidade.addEventListener("click", function() {

    const numeroAleatorio = Math.floor(Math.random() * curiosidades.length);

    textoCuriosidade.textContent = curiosidades[numeroAleatorio];

});

const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const resposta = botao.nextElementSibling;

        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }

    });

});
