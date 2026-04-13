const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    let num = entradas[i];
    i++;
    return num;
}

function print(valor) {
    console.log(valor);
}

module.exports = { gets, print };