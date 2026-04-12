/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1. Preço do combustível;
    2. Gasto médio de combustível do carro por Km;
    3. Distância em Km da viagem.
*/

const precoLitroCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

let litrosGastos;
let valorViagem;

litrosGastos = (distanciaEmKm/kmPorLitro);

valorViagem = litrosGastos * precoLitroCombustivel;

console.log(valorViagem.toFixed(2));