import { criarItemLista } from "./js/criarItemLista.js";
import verificaListaVazia from "./js/verificaListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item");

const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemLista();
  listaDeCompras.appendChild(itemDaLista);
  verificaListaVazia(listaDeCompras);
});

verificaListaVazia(listaDeCompras);
