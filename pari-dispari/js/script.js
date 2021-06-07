// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// 1) Chiedo all'utente di scegliere tra pari e dispari
var userEvenOdd = prompt('Scegli.. pari o dispari?').toLowerCase();

// 2) Verifico che l'utente abbia effetivamente scritto pari o dispari
var i = 0;

while (userEvenOdd != 'pari' && userEvenOdd != 'dispari'){
    userEvenOdd = prompt('Scrivi pari o dispari!');
    i++
}

// 3) Chiedo all'utente di scegliere tra pari e dispari
var userNumber = prompt('Scegli un numero tra 1 e 5');

// 4) Verifico che l'utente abbia effetivamente scelto un numero tra 1 e 5
var i = 0;

while (userNumber > 5 || userNumber <= 0){
    userNumber = prompt('Scegli un numero tra 1 e 5!');
    i++;
}

// 6) Assegno ad una variabile il numero random utilizzando la funzione creata (punto 5)
var pcNumber = randomNum (1, 5)
console.log(pcNumber);


// 5) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//********** functions
function randomNum (n1, n2){
    return Math.floor(Math.random() * (n2 - n1) ) + n1;
}