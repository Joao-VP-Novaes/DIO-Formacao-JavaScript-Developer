/*
    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira:

        valor bruto do salário - percentual de imposto mediante a faixa salarial + adicionnal 
        dos benefícios.

    Para calcular o percentual de imposto, segue as seguintes alíquotas:

        De R$0,00 a R$1100,00 - 5% de imposto
        De R$1100,01 a R$2500,00 - 10% de imposto
        Maior que R$2500,00 - 15% de imposto
*/

let { gets, print } = require("./funcoes_auxiliares.js");

let valorBruto = gets();
let bonus = gets();
let valorFinal;

if(valorBruto >= 0 && valorBruto <= 1100) {
    valorFinal = valorBruto - (valorBruto * 5/100) + bonus;

} else if(valorBruto > 1100 && valorBruto <= 2500) {
    valorFinal = valorBruto - (valorBruto * 10/100) + bonus;

} else if(valorBruto > 2500) {
    valorFinal = valorBruto - (valorBruto * 15/100) + bonus;
    
} else {
    valorFinal = "Valor inválido.";
}

print(valorFinal);