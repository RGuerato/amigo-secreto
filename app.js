//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

function adicionarNome() {
    let nome = document.getElementById("amigo").value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        listaNomes.push(nome);
        document.getElementById("amigo").value = "";
        ;
    }
}
