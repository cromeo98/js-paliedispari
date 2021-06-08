// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// 1) Chiedo all'utente di scegliere tra pari e dispari
var userEvenOdd = prompt('Scegli.. pari o dispari?');

// 2a) Verifico che l'utente abbia effetivamente scritto qualcosa
var i = 0
while(userEvenOdd == null){
    userEvenOdd = prompt('Scrivi pari o dispari!');
    i++
}

userEvenOdd = userEvenOdd.toLowerCase

// 2b) Verifico che l'utente abbia effetivamente scritto pari o dispari
var i = 0;

while (userEvenOdd != 'pari' && userEvenOdd != 'dispari'){
    userEvenOdd = prompt('Scrivi pari o dispari!');
    i++;
    console.log(userEvenOdd);
}
console.log('L\'utente ha scelto ' + userEvenOdd);

// 3) Chiedo all'utente di scegliere tra pari e dispari
var userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

// 4) Verifico che l'utente abbia effetivamente scelto un numero tra 1 e 5
var i = 0;

while (userNumber > 5 || userNumber <= 0){
    userNumber = parseInt(prompt('Scegli un numero tra 1 e 5!'));
    i++;
}
console.log('L\'utente ha scelto ' + userNumber);

// 6) Assegno ad una variabile il numero random utilizzando la funzione creata (punto 5)
var pcNumber = randomNum (1, 5);
console.log('pcNumber = ' + pcNumber);

// 7) Sommo i due numeri
var sum = userNumber + pcNumber ;
console.log('sum = ' + sum);

// 9) Utilizzando la formula creata (punto 9) dichiaro il vincitore
var evenOrOdd = isEvenOrOdd(sum);
console.log(evenOrOdd);

if (evenOrOdd == userEvenOdd) {
    console.log('Il vincitore è l\'utente');
} else {
    console.log('Il vincitore è il pc');
}   

//********** functions
// 5) Creo una funzione per generare un numero random da 1 a 5.
function randomNum (n1, n2){
    return Math.floor(Math.random() * (n2 - n1 + 1) ) + n1;
}

// 8) Creo un funzione per stabilire se il numero è pari o dispari
function isEvenOrOdd (somma) {
    if (somma % 2 == 0){
        return 'pari';
    } else{
        return 'dispari';
    }
}