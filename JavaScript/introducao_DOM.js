// 1º CONCEITO - MUDAR TEXTO
document.getElementById('botao_texto').addEventListener("click",
    function(){
        const altera_estilo = document.getElementById("alterarTextoParagrafo")
        document.getElementById("alterarTextoParagrafo").innerText = "Texto e estilo alterado, via DOM/JS, com sucesso!"
        altera_estilo.style.color = "green"
        altera_estilo.style.fontSize = "24px"
    });