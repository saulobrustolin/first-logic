// IDs: inNome, btAdicionar, btListar, btTabela, outResposta

var clubes = [];

function Adicionar(){
    var inNome = document.getElementById("inNome");

    nome = inNome.value;

    if(inNome = ""){
        alert("Por favor, digite um nome válido...");
        return;
    } else if(clubes.indexOf(nome) != -1){
        alert("Esse time já está listado, por favor inscreva um time diferente!")
        return;
    }

    clubes.push(nome);

    inNome = "0";

    console.log(clubes);
    Mostrar();
}

function Mostrar(){
    var inNome = document.getElementById("inNome");
    var outResposta = document.getElementById("outResposta");

    nome = inNome.value;

    if(inNome = ""){
        alert("Por favor, digite um nome válido...");
        inNome.focus();
        return;
    }

    var lista = "";

    for(var i = 0; i < clubes.length; i++){
        lista += (i+1) + ". " + clubes[i] + "<br>"
    }

    outResposta.innerHTML = lista;
}

function Limpar(){
    var outResposta = document.getElementById("outResposta");

    outResposta.textContent = "";
}

function Tabela(){
    var inNome = document.getElementById("inNome");
    var outResposta = document.getElementById("outResposta");
    var nome = inNome.value;

    if(clubes.length % 2 != 0){
        alert("Não é possível criar a tabela pois o número de times é ímpar, por favor escreva mais 1 time!");
        inNome.focus();
    } else if(clubes.length == 0){
        alert("Não é possível criar a tabela pois não existe ao menos 1 par de time incrito!")
    }

    var tabela = "";
    var tabelaReverse = clubes.slice();
    tabelaReverse = tabelaReverse.reverse();

    for(var i = 0; i < clubes.length; i++){
        tabela += (i+1) + "° jogo - " + clubes[i] + " x " + tabelaReverse[i] + "<br>"
    }

    console.log(clubes);
    console.log(tabelaReverse);

    outResposta.innerHTML = tabela;
}

var tabela = document.getElementById("btTabela");
tabela.addEventListener("click", Tabela);

var limpar = document.getElementById("btLimpar");
limpar.addEventListener("click", Limpar);

var listar = document.getElementById("btListar");
listar.addEventListener("click", Mostrar);

var adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", Adicionar);