// Faça uma função que verifica se você é maior de idade.

function verificarMaiorIdade(idade){
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

let idade = 30;

if (verificarMaiorIdade(idade)){
    console.log("É maior de idade.");
} else {
    console.log("Não é maior de idade.");
}