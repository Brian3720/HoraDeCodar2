
var valor_1 = parseInt(prompt("Informe um valor: "));
var valor_2 = parseInt(prompt("Informe um valor: "));
var valor_3 = parseInt(prompt("Informe um valor: "));

if (valor_1 > valor_2 && valor_1 > valor_3) {
    alert('O maior número é ' + valor_1);
} 
else if (valor_2 > valor_1 && valor_2 > valor_3) {
    alert('O maior número é ' + valor_2);
} 
else if (valor_3 > valor_1 && valor_3 > valor_2) {
    alert ('O maior número é ' + valor_3 );
} 
else {
    alert ("Todos os três valores são iguais");
}
