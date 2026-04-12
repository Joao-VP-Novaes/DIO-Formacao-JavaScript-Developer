/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
    Instancia uma pessoa chamada José que tenha 70Kg de peso e 1,75 metros de altura e peça a José para
    dizer o valor do seu IMC. 
*/

class Pessoa {
    nome;
    peso;
    altura;

    calcularImc() {
        let imc = this.peso / this.altura**2;
        return imc;
    }

    dizerImc() {
        console.log(`Meu IMC é ${this.calcularImc().toFixed(2)}`);
    }

    classificarImc() {
        let imc = this.calcularImc();
        let condicao;

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

        return condicao;
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = "José";
pessoa1.peso = 70;
pessoa1.altura = 1.75;

console.log(pessoa1);
pessoa1.dizerImc();

console.log(" ");

const pessoa2 = new Pessoa();
pessoa2.nome = "Renan";
pessoa2.peso = 80;
pessoa2.altura = 1.75;

console.log(pessoa2);
pessoa2.dizerImc();
console.log(pessoa2.classificarImc());