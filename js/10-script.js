// Solicita ao usuário que insira a altura (em metros) e o sexo (1 para feminino, 2 para masculino)
let altura = parseFloat(prompt("Digite a altura em metros:"));
let sexo = parseInt(prompt("Digite o sexo (1 para feminino, 2 para masculino):"));

// Verifica se o sexo é válido (1 para feminino, 2 para masculino)
if (sexo !== 1 && sexo !== 2) {
    alert("Sexo inválido. Use 1 para feminino ou 2 para masculino.");
} else {
    // Calcula o peso ideal com base no IMC
    let pesoIdeal;
    if (sexo === 1) { // Feminino
        pesoIdeal = 21.7 * Math.pow(altura, 2);
    } else { // Masculino
        pesoIdeal = 24.9 * Math.pow(altura, 2);
    }

    // Exibe o peso ideal calculado
    alert("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}
