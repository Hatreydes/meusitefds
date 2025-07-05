const Botao = document.getElementById("botao");
  const texto = document.getElementById("mensagem");

  Botao.onclick = function() {
    texto.textContent = "A persistência leva ao sucesso.";
  }