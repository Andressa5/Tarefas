let nota1 = parseFloat(prompt('digite a primeira nota:'));
let nota2 = parseFloat(prompt('digite a segunda nota:'));
let nota3 = parseFloat(prompt('digite a terceira nota:'));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log('A média escolar é: ' + media.toFixed(2));