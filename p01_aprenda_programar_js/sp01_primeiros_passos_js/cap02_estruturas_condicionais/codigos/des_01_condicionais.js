/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem; 

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoCombustivel = "gasolina";
let kmPorLitro = 7;
let distanciaEmKm = 111;

let valorGasto;

let litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === "gasolina") {
    valorGasto = litrosConsumidos * precoGasolina;

} else if (tipoCombustivel === "etanol") {
    valorGasto = litrosConsumidos * precoEtanol;

}

console.log("Valor gasto:", valorGasto.toFixed(2));