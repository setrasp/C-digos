numero = 56;

if (numero > 0) {
    console.log ("O numero é POSITIVO");
}

else if (numero === 0) {
    console.log ("O numero é ZERO");
}

else {
    console.log ("O numero é NEGATIVO");
}

console.log ("------------------------");

// ATIVIDADE 2


numero = 17;

if (numero > 17) {
    console.log ("Maior de idade");
}

else if (numero < 18) {
    console.log ("Menor de idade");
}
console.log ("------------------------");

// ATIVIDADE 3

numero = 25;

if(numero % 2 === 0) {
    console.log (" O numero é PAR");
} else {
    console.log (" O numero é ÍMPAR");
}
console.log ("------------------------");

// ATIVIDADE 4

numero1 = 20
numero2 = 30
numero3 = 65

if (numero1 > numero2) {
    console.log ("O numero 1 é maior que o numero 2");
    console.log ("O numero 1 é o MAIOR NUMERO")
}

if (numero2 > numero1) {
    console.log ("O numero 2 é maior que o numero 1");
    console.log ("O numero 2 é o MAIOR NUMERO")
}

if (numero3 > numero2) {
    console.log ("O numero 3 é maior que o numero 2");
    console.log ("O numero 3 é o MAIOR NUMERO")
}


console.log ("------------------------");

// ATIVIDADE 5

letrausuario = "A"

if (letrausuario.toLowerCase() == "a"){
    console.log("VOGAL");
}

else if (letrausuario.toLowerCase() == "e"){
    console.log("VOGAL");
}

else if (letrausuario.toLowerCase() == "i"){
    console.log("VOGAL");
}

else if (letrausuario.toLowerCase() == "o"){
    console.log("VOGAL");
}

else if (letrausuario.toLowerCase() == "u"){
    console.log("VOGAL");
} 

else {
    console.log("CONSOANTE");
}

console.log ("------------------------");

// ATIVIDADE 6

aluno = 7

if (aluno >= 7) {
    console.log ("Aprovado")
}    
else if (aluno >= 5) {
    console.log ("Recuperação")
}    

else {
    console.log ("Reprovado")
}

console.log ("------------------------");

// ATIVIDADE 7

var numero1,numero2
var numero1= 14
var numero2= 9
 
 console.log("20+6=",numero1+numero2)
 console.log("20x6=",numero1*numero2)
 console.log("20/6=",numero1/numero2)
 console.log("20-6=",numero1-numero2)
 
 console.log ("------------------------");

// ATIVIDADE 8

ano = 2026

if (ano % 4 == 0) {
    console.log ("Ano bissexto")
}
else {
    console.log ("Não bissexto")
}

console.log ("------------------------");

// ATIVIDADE 9


console.log ("------------------------");

// ATIVIDADE 10

var peso, altura, minhaaltura, imc
peso = 100
altura = 1,85
 
minhaaltura = altura * altura
imc = peso / minhaaltura
if (imc <= 18.5){
    console.log("abaixo do peso")
}
else if (imc>=18.5 <= 24.9){
    console.log("peso ideal")
}
else (imc >=24.9 , "acima do peso")

// ATIVIDADE 11

var meses
meses = "março"
 
if (meses =="março"|| meses == "maio" || meses == "julho" || meses == "outubro" || meses == "dezembro" ) {
console.log ("possui 30 dias no mes de", meses)
}
else if ( meses == "janeiro" || meses =="abril" || meses == "junho" || meses == "setembro" || meses == "novembro") {
    console.log ("possui 31 dias no mes de", meses)
}
else { (meses == "fevereiro")
    console.log ( meses, "mes que tem 29 dias")
}
 
console.log ("------------------------");

// ATIVIDADE 12
 
var lados1 = 10
    var lados2 = 30
    var lados3 = 20
 
    if (lados1 == lados2 && lados2 == lados3){
        console.log("é um triângulo equilátero")
    }else if(lados1 == lados2 != lados3 || lados2 == lados3 != lados1 || lados3 == lados1 != lados3){
        console.log("triângulo isósceles") }
    else {lados1 != lados2 != lados3
        console.log("Triangulo Escaleno")}
       
 
        console.log ("------------------------");

        // ATIVIDADE 13

var aleatorio=Math.floor (Math.random() * 101)
    var chute=77
 
    console.log(aleatorio)
 
    if(chute==aleatorio){
        console.log("acertou!!")
    }else if(chute>aleatorio){
        console.log("errou! Ele é menor ")
    }else if(chute<aleatorio){
        console.log("errou! Ele é maior")
    }else{
        console.log("Dados invalidos")
}