const amigos = [];
const amigo = document.querySelector("#amigo");
const lista = document.querySelector("#listaAmigos");

function adicionarAmigo() {
  if (amigo.value === "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(amigo.value);
  }

  amigo.value = "";
  updateAmigoLista();
}

function updateAmigoLista() {
  lista.innerHTML = "";

  for (let amigo of amigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia");
  } else {
    lista.innerHTML = "";
    const indice = Math.floor(Math.random() * amigos.length) + 1;
    const resultado = document.querySelector("#resultado");
    const liAmigoEscolhido = document.createElement("li");
    liAmigoEscolhido.textContent = `O amigo secreto sorteado é: ${amigos[indice]}`;
    resultado.appendChild(liAmigoEscolhido);
  }
}
