function mostrarMensagem() {
    // Pegar valores do HTML
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    // Converter idade para número
    idade = Number(idade);

    let mensagem = ""

    // Condicional
    if (idade >= 18) {
        mensagem = `Olá ${nome}, você é maior de idade!`;

    } else {
        mensagem = `Olá ${nome}, você é menor de idade!`;
    }
    
    // Mostrar no HTML
    document.getElementById("resultado").innerText = mensagem;

}
