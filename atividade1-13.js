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

    minhaaltura = 1.75
    meupeso = 55
    minhaalturax = minhaaltura * minhaaltura
    meupesoi = meupeso / minhaalturax
         
        if ( meupesoi <= 18.5 ) {
            console.log ( " Abaixo do peso " )
           }
            else if ( meupesoi >= 18.5 <= 24.9 ) {
            console.log ( " Peso ideal")
           }
            else ( meupesoi >= 24.9 , " Acima do peso " )

            console.log ("------------------------");

// ATIVIDADE 11

meses = "maio"

if ("meses == "março" || meses == "maio || meses == "julho" || meses == "outubro" || meses == dezembro"){
    console.log (possui 31 dias os mes de '', meses) 
}   
else if ( meses == "janeiro" || meses == "abril" || meses == "junho" || meses == setembro || meses == novembro) {
console.log ("possui 30 dias o mes de", meses)
}
else {meses == "fevereiro"
    console.log (meses, " mes possui 29 dias")
}


console.log ("------------------------");

// ATIVIDADE 12 


var lado1, lado2, lado3
lado1 = 5
lado2 = 5
lado3 = 5

if (lado1 == lado2 && lado2 == lado3) {
    console.log ( " o triangilo é equilatero")
    }
    else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log ("o triangulo é isosceles")
    }
    else { lado1 != lado2 != lado3 && lado3 != lado1
        console.log ("o triangulo é escaleno")
    }


    console.log ("------------------------");

    // ATIVIDADE 13



const numeroAleatorio - Math.floor ( Math.random () * 100) + 1; let tentativas = 0;

    console.log (" Bem-vindo ao jogo de adivinhaçãol " ); 
    console.log( " Tente adivinhar ◦ número entre 1 e 100. " );

    function iniciarJogo () {
        while (true)}

        let palpite - prompt( " Diglte um numero entre 1 e 109 Ou 'sair' para sair do jogo ):" ); 
        if ( palpite.toLowerCase () --- 'sair' ) {
            if ( palpite.toLowerCase () --- 'sair' ) ;
            break;
        }

        var tentativa parseInt ( palpite );
        if ( lisNaN ( tentativa ) && tentativa >= 1 && tentativa <= 100) tentativas ; {tentativas++;
            if (tentativa < numeroAleatorio) {
                console.log("Tente um número maior."):
            } else if (tentativa > numeroAleatorio) {
                console.log("Tente um número menor.");
            } esle {
                console.log (" parabens! voceê acertou o numero ${numeroAleatorio} em ${tentativas} tentativas.'"); 
                break;
            }
        }else {
            console.log("Por favor, digite un número válido entre 1 e 100.");
        }