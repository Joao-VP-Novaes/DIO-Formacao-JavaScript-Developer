/*
    Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número par encontrado.
*/

let listaNums = [32, 43, 83, 92, 11, 98, 65, 82, 33, 52, 16, 17, 99, 102, 265, 227];

for (let i = 0; i < listaNums.length; i++){
    if (listaNums[i] % 2 === 0){
        console.log(`O número ${listaNums[i]} é par.`);
    }
}