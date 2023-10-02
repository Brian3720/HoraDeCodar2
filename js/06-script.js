var quantidade = 4;
var numeros = [];

for (var i = 0; i < quantidade; i++) {
    var numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    numeros.push(numero);
}

if (numeros.length > 0) {
    var primeiroNumero = numeros[0];
    var ultimoNumero = numeros[numeros.length - 1];
    var maiorNumero = encontrarMaiorNumero(numeros);

    alert(
        "O primeiro número digitado é: " + primeiroNumero + "\n" +
        "O último número digitado é: " + ultimoNumero + "\n" +
        "O maior número entre eles é: " + maiorNumero
    );
} else {
    alert("ERRO 404: Nenhum número foi digitado.");
}

// Função para encontrar o maior número em um array
function encontrarMaiorNumero(array) {
    var maior = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}
