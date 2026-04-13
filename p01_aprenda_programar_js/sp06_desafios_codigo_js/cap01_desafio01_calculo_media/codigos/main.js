/* 
    1) Faça um programa que receba a média de um aluno. 
    Caso a média seja menor que 5, imprima "Reprovado".
    Caso a média seja igual ou maior que 5 e menor que 7, imprima "Recuperação".
    Caso a média seja igual ou maior que 7, imprima "Aprovado."
    
    Exemplo:
        Entrada:
            5.5
        Saída:
            "Recuperação"
*/

const { gets, print } = require("./funcoes_auxiliares");

const mediaAluno = gets();

if (mediaAluno < 5) {
    print("Reprovado");

} else if (mediaAluno >= 5 && mediaAluno < 7) {
    print("Recuperação");

} else {
    print("Aprovado");
}