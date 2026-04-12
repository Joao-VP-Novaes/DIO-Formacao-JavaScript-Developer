/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    - À vista débito, recebe 10% de desconto;
    - À vista no dinheiro ou Pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const valorEtiqueta = 100;
const formaPagamento = "acima de duas vezes";
let valorFinal;

if (formaPagamento === "debito") {
    valorFinal = valorEtiqueta - (valorEtiqueta * 10/100);

} else if (formaPagamento === "dinheiro" || formaPagamento == "Pix") {
    valorFinal = valorEtiqueta - (valorEtiqueta * 15/100);

} else if (formaPagamento === "duas vezes") {
    valorFinal = valorEtiqueta;

} else {
    valorFinal = valorEtiqueta + (valorEtiqueta * 10/100);
}

console.log(valorFinal.toFixed(2));