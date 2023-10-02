var n1 = parseFloat(prompt("Digite o 1º número: "));
var n2 = parseFloat(prompt("Digite o 2º número: "));
var n3 = parseFloat(prompt("Digite o 3º número: "));
var n4 = parseFloat(prompt("Digite o 4º número: "));


if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10 && n4 >= 0 && n4 <= 10){
    var media = (n1 + n2 + n3 + n4) / 4;
    alert(`sua media é ${media}`)
}



if (media > 5){
    alert(`sua nota foi ${media} parabéns você passou!`)
}

else{
    alert(`por conta da sua nota de ${media} ter sido abaixo de 5, você reprovou ;-;`)
}
