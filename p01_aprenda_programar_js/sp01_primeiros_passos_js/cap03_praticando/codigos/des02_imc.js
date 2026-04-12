/*
    2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição
    de peso de uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos. Condição:
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obesidade grave.
*/

const peso = 67.5;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);
let condicao;

console.log(imc.toFixed(2));

if (imc < 18.5) {
    condicao = "Abaixo do peso";

} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso normal";

} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso";

} else if (imc >= 30 && imc <= 40) {
    condicao = "Obeso";

} else {
    condicao = "Obesidade grave";
}

console.log(condicao);