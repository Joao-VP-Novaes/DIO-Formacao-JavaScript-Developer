/*
    1) Faça um algoritmo que dadas as três notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua
    média e a sua classificação conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3

    Classificação:
    - Média < 5 = reprovação;
    - 5<= Média <= 7 = recuperação;
    - Média > 7 = aprovação. 
*/

let nota1 = 8;
let nota2 = 7;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

let resultado;

if (media < 5) {
    resultado = "Reprovação.";

} else if (media <= 7) {
    resultado = "Recuperação.";

} else {
    resultado = "Aprovação.";
}

console.log(media.toFixed(2));
console.log(resultado);