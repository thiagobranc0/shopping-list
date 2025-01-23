import gerarDiaSemana from "./gerarDiaSemana.js";

const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemLista() {
  if (inputItem.value != "") {
    const itemDaLista = document.createElement("li");

    const containerDaLista = document.createElement("div");
    containerDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + ++contador;

    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    containerDaLista.appendChild(inputCheckbox);
    containerDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerDaLista);

    inputCheckbox.addEventListener("click", () => {
      if (inputCheckbox.checked) {
        nomeItem.style.textDecoration = "line-through";
      } else {
        nomeItem.style.textDecoration = "none";
      }
    });

    const dataCompleta = gerarDiaSemana();
    const textoData = document.createElement("p");
    textoData.classList.add("texto-data");
    textoData.innerHTML = dataCompleta;
    itemDaLista.appendChild(textoData);

    return itemDaLista;
  } else {
    alert("Por favor, insira um item!");
    return;
  }
}
