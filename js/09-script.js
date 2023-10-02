var anoNasc = parseInt(prompt("Qual o ano em que você nasceu"));
var anoAtual = 2023;

var calc = anoAtual - anoNasc;

if(calc >= 16){
    alert("pode votar ta liberada a baderna")
}
else{
    alert("não pode votar, saia daqui")
}