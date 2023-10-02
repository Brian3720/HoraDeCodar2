


var valor1 = parseFloat(prompt("Informe o primeiro valor:"));
var valor2 = parseFloat(prompt("Informe o segundo valor:"));
var valor3 = parseFloat(prompt("Informe o terceiro valor:"));

var maiorValor = Math.max(valor1, valor2, valor3);


if (maiorValor === valor1) {
    valor1 = 0;
} else if (maiorValor === valor2) {
    valor2 = 0;
} else {
    valor3 = 0;
}

var segundoMaior = Math.max(valor1, valor2, valor3);

var somaDosMaiores = maiorValor + segundoMaior;


alert("A soma dos 2 maiores valores é: " + somaDosMaiores);