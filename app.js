//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

function adicionarNome() {
    let nome = document.querySelector("input").value;
    if (nome == "") {
        alert("Por favor, insira um nome.");        
    } else{
        listaNomes.push(nome);
        document.querySelector("input").value = "";
        exibirLista();       
    }
}

function exibirLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaNomes.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaNomes[i];        
        lista.appendChild(item);     
    }
}

function sortearAmigo(){
    if (listaNomes.length === 0) {
        alert("A lista de amigos está vazio. Não há ninguém para sortear.");
        return;
    }
}
