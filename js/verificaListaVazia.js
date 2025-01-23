const mensagem = document.querySelector(".mensagem-lista-vazia");

function verificaListaVazia(listaDeCompras) {
  const listaDeItens = listaDeCompras.querySelectorAll("li");

  if (listaDeItens.length > 0) {
    mensagem.style.display = "none";
    return;
  }

  mensagem.style.display = "block";
  return;
}

export default verificaListaVazia;
