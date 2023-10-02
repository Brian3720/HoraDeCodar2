var quantidade = 7;

var numeros = []; /* so entra menor que 72 */
var soma = 0;

for (var i = 1; i <= quantidade; i++) {
  var numero = parseFloat(prompt("Digite o " + i + "º número:"));

  if (numero < 72) {
    numeros.push(numero);
    soma += numero;
  }

}

alert(`os numeros abaixo de 72 são ${numeros}`);

alert(`o valor dos numeros somados é ${soma}`);