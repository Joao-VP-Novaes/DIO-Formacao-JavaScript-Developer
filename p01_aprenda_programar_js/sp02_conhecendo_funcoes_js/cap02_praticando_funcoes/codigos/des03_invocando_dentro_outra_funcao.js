// Invoque uma das funções dos exercícios anteriores dentro de outra.

function escreverNome(nome){
    return "Seu nome é " + nome;
}

let nome = "Pedro";
let idade = 19;

function verificarMaiorIdade(idade){
    if (idade >= 18){
        console.log(escreverNome(nome), "e você é maior de idade.");
    } else {
        console.log(escreverNome(nome), "e você é menor de idade.");
    }
}

verificarMaiorIdade(idade);