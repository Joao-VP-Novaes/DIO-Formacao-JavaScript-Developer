/*
    2) Faça um programa que receba N (quantidade de números) e seus respectivos valores e
    imprima o maior número par e o menor número ímpar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número ímpar: 1
*/

const { gets, print } = require("./funcoes_auxiliares.js");

let maiorPar;
let menorImpar;

let tamanhoLista = gets();

for (let i = 0; i < tamanhoLista; i++){
    let n = gets();

    if (n % 2 === 0){
        if(maiorPar === undefined) {
            maiorPar = n;
        } else {
            if(maiorPar < n) {
                maiorPar = n;
            }
        }
    } else {
        if(menorImpar === undefined) {
            menorImpar = n;
        } else {
            if(menorImpar > n) {
                menorImpar = n;
            }
        }
    }
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número ímpar: ${menorImpar}`);