// Solicita ao usuário que insira os dois valores inteiros e a operação
let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
let operacao = parseInt(prompt("Escolha a operação (1 para Adição, 2 para Subtração, 3 para Divisão, 4 para Multiplicação):"));

// Verifica se a operação é válida (1, 2, 3 ou 4)
if (operacao < 1 || operacao > 4) {
    alert("Operação inválida. Use 1 para Adição, 2 para Subtração, 3 para Divisão ou 4 para Multiplicação.");
} else {
    let resultado;

    // Realiza a operação escolhida
    switch (operacao) {
        case 1:
            resultado = valor1 + valor2;
            break;
        case 2:
            resultado = valor1 - valor2;
            break;
        case 3:
            resultado = valor1 / valor2;
            break;
        case 4:
            resultado = valor1 * valor2;
            break;
    }

    // Exibe o resultado
    alert("Resultado da operação: " + resultado);
}
