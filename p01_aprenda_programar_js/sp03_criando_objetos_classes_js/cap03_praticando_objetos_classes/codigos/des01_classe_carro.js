/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o 
    valor gasto em reais para realizar esse percurso.
*/

class Carro {
    constructor(marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularValorViagem(quantidadeKm, precoCombustivel) {
        let litrosNecessarios = quantidadeKm * this.gastoMedioCombustivel;
        let valorViagem =  litrosNecessarios * precoCombustivel;

        return valorViagem;
    }
}

let uno = new Carro("Fiat", "prata", 1/12);
let resultado1 = uno.calcularValorViagem(70, 5);
console.log(uno);
console.log(resultado1.toFixed(2));

console.log(" ");

let palio = new Carro("Fiat", "preto", 1/10);
let resultado2 = palio.calcularValorViagem(70, 5);
console.log(palio);
console.log(resultado2.toFixed(2));